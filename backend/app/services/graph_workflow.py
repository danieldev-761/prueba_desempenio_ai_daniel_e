import re
import time
from typing import TypedDict, List, Dict, Any, Optional
from langchain_core.documents import Document
from langchain_core.messages import SystemMessage, HumanMessage, AIMessage, BaseMessage
from langgraph.graph import StateGraph, END

from app.core.config import settings
from app.core.logging import logger
from app.core.prompts import SYSTEM_PROMPT, FEW_SHOT_EXAMPLES, ESCALATION_HUMAN_MESSAGE
from app.services.llm_factory import get_chat_model
from app.services.vector_store import VectorStoreService
from app.services.cache_service import SemanticCacheService
from app.services.frequent_issues_service import FrequentIssuesService


class AgentState(TypedDict):
    query: str
    session_id: str
    channel: str
    triage_hit: bool
    cache_hit: bool
    documents: List[Document]
    relevance_score: float
    generation: str
    status: str  # RESOLVED_BY_FAQ_TRIAGE | RESOLVED_BY_CACHE | RESOLVED_BY_RAG | ESCALATED_TO_HUMAN
    is_escalated: bool
    escalation_reason: Optional[str]
    sources: List[Dict[str, Any]]
    start_time: float
    latency_ms: float
    token_metrics: Dict[str, Any]


class AcademyGraphWorkflow:
    def __init__(
        self,
        vector_store_service: Optional[VectorStoreService] = None,
        cache_service: Optional[SemanticCacheService] = None,
        triage_service: Optional[FrequentIssuesService] = None,
        chat_model=None,
    ) -> None:
        self.vector_store_service = vector_store_service or VectorStoreService()
        self.cache_service = cache_service or SemanticCacheService()
        self.triage_service = triage_service or FrequentIssuesService()
        self.chat_model = chat_model
        self.graph = self._build_graph()

    def _get_chat_model(self):
        if self.chat_model is not None:
            return self.chat_model
        return get_chat_model()

    # --- NODE 0: Deterministic Zero-Token Triage (ADR-012 & ADR-013) ---
    def node_deterministic_triage(self, state: AgentState) -> Dict[str, Any]:
        query = state["query"]
        session_id = state.get("session_id", "default_session")
        logger.info(f"LangGraph Node: node_deterministic_triage for query: '{query[:40]}...' (session='{session_id}')")

        match = self.triage_service.evaluate(query, session_id=session_id)
        if match is not None:
            latency = (time.perf_counter() - state.get("start_time", time.perf_counter())) * 1000.0
            is_escalate = match.get("is_escalate", False) or "[[ESCALATE]]" in match.get("response", "")

            if is_escalate:
                logger.info(f"Triage Tier 3: Gated escalation triggered for session '{session_id}'")
                cleaned_text = match["response"].replace("[[ESCALATE]]", "").strip()
                return {
                    "triage_hit": True,
                    "generation": cleaned_text,
                    "status": "ESCALATED_TO_HUMAN",
                    "is_escalated": True,
                    "escalation_reason": "TRIAGE_SELF_SERVICE_EXHAUSTED",
                    "sources": [{
                        "document": "frequent_issues.json",
                        "section": match["title"],
                        "chunk_id": match["category"],
                    }],
                    "relevance_score": 1.0,
                    "latency_ms": round(latency, 2),
                    "token_metrics": {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0, "cost_usd": 0.0},
                }

            logger.info(f"Zero-Token Triage (Tier {match.get('tier', 1)}) RESOLVED query '{query[:40]}...' via '{match['category']}'")
            return {
                "triage_hit": True,
                "generation": match["response"],
                "status": "RESOLVED_BY_FAQ_TRIAGE",
                "is_escalated": False,
                "escalation_reason": None,
                "sources": [{
                    "document": "frequent_issues.json",
                    "section": match["title"],
                    "chunk_id": match["category"],
                }],
                "relevance_score": 1.0,
                "latency_ms": round(latency, 2),
                "token_metrics": {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0, "cost_usd": 0.0},
            }

        return {
            "triage_hit": False,
        }

    # --- NODE 1: Semantic Cache Lookup ---
    def node_check_cache(self, state: AgentState) -> Dict[str, Any]:
        query = state["query"]
        logger.info(f"LangGraph Node: node_check_cache for query: '{query[:40]}...'")

        hit = self.cache_service.lookup(query)
        if hit is not None:
            latency = (time.perf_counter() - state.get("start_time", time.perf_counter())) * 1000.0
            return {
                "cache_hit": True,
                "generation": hit["response"],
                "status": "RESOLVED_BY_CACHE",
                "is_escalated": False,
                "escalation_reason": None,
                "sources": hit.get("sources", []),
                "relevance_score": hit.get("similarity_score", 1.0),
                "latency_ms": round(latency, 2),
                "token_metrics": {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0, "cost_usd": 0.0},
            }

        return {
            "cache_hit": False,
        }

    # --- NODE 2: Vector Retrieval ---
    def node_retrieve(self, state: AgentState) -> Dict[str, Any]:
        query = state["query"]
        logger.info(f"LangGraph Node: node_retrieve for query: '{query[:40]}...'")

        results = self.vector_store_service.similarity_search_with_relevance_scores(
            query=query,
            k=4,
            score_threshold=0.0,  # Fetch top-k first; conditional edge gates on max score
        )

        if not results:
            return {
                "documents": [],
                "relevance_score": 0.0,
                "sources": [],
            }

        docs = [doc for doc, _ in results]
        top_score = results[0][1] if results else 0.0

        sources = []
        for doc in docs:
            meta = doc.metadata or {}
            sources.append({
                "document": meta.get("source_file", "unknown"),
                "section": meta.get("section", "General"),
                "chunk_id": meta.get("chunk_id", ""),
            })

        return {
            "documents": docs,
            "relevance_score": round(top_score, 4),
            "sources": sources,
        }

    # --- NODE 3: Grounded Answer Generation ---
    def node_generate(self, state: AgentState) -> Dict[str, Any]:
        query = state["query"]
        documents = state.get("documents", [])
        logger.info(f"LangGraph Node: node_generate with {len(documents)} context chunks")

        context_text = "\n\n---\n\n".join([
            f"[Fuente: {d.metadata.get('source_file', 'doc')} | Sección: {d.metadata.get('section', 'General')}]\n{d.page_content}"
            for d in documents
        ])

        messages: List[BaseMessage] = [
            SystemMessage(content=SYSTEM_PROMPT.format(context=context_text, history="Ninguno")),
        ]

        for ex in FEW_SHOT_EXAMPLES:
            if ex["role"] == "user":
                messages.append(HumanMessage(content=ex["content"]))
            elif ex["role"] == "assistant":
                messages.append(AIMessage(content=ex["content"]))

        messages.append(HumanMessage(content=query))

        model = self._get_chat_model()
        response = model.invoke(messages)
        
        # Handle string vs list of content parts (e.g. Gemini [{'type': 'text', 'text': '...'}])
        raw_content = getattr(response, "content", response)
        if isinstance(raw_content, list):
            content = "".join([
                part.get("text", "") if isinstance(part, dict) else str(part)
                for part in raw_content
            ]).strip()
        else:
            content = str(raw_content).strip()

        # Token usage extraction
        token_usage = getattr(response, "usage_metadata", None) or getattr(response, "response_metadata", {}).get("token_usage", {})
        prompt_tokens = token_usage.get("prompt_tokens") or token_usage.get("input_tokens") or 0
        comp_tokens = token_usage.get("completion_tokens") or token_usage.get("output_tokens") or 0
        total_tokens = prompt_tokens + comp_tokens

        # Estimated cost calculation ($0.15/1M input, $0.60/1M output for mini/flash)
        cost_usd = (prompt_tokens * 0.00000015) + (comp_tokens * 0.00000060)

        return {
            "generation": content,
            "token_metrics": {
                "prompt_tokens": prompt_tokens,
                "completion_tokens": comp_tokens,
                "total_tokens": total_tokens,
                "cost_usd": round(cost_usd, 6),
            },
        }

    # --- NODE 4: Grounding & Escalation Verifier ---
    def node_verify_grounding(self, state: AgentState) -> Dict[str, Any]:
        generation = state.get("generation", "")
        logger.info(f"LangGraph Node: node_verify_grounding checking text ({len(generation)} chars)")

        if "[[ESCALATE]]" in generation:
            logger.info("Grounding Verifier: [[ESCALATE]] token detected -> routing to human escalation.")
            cleaned_text = generation.replace("[[ESCALATE]]", "").strip()
            if not cleaned_text:
                cleaned_text = ESCALATION_HUMAN_MESSAGE
            return {
                "generation": cleaned_text,
                "is_escalated": True,
                "escalation_reason": "UNGROUNDED_OR_OUT_OF_SCOPE",
                "status": "ESCALATED_TO_HUMAN",
            }

        return {
            "is_escalated": False,
            "escalation_reason": None,
            "status": "RESOLVED_BY_RAG",
        }

    # --- NODE 5: Human Escalation Formatter ---
    def node_escalate(self, state: AgentState) -> Dict[str, Any]:
        reason = state.get("escalation_reason") or "LOW_SIMILARITY_SCORE"
        logger.info(f"LangGraph Node: node_escalate triggering for reason: '{reason}'")

        latency = (time.perf_counter() - state.get("start_time", time.perf_counter())) * 1000.0
        return {
            "generation": ESCALATION_HUMAN_MESSAGE,
            "is_escalated": True,
            "escalation_reason": reason,
            "status": "ESCALATED_TO_HUMAN",
            "sources": [],
            "latency_ms": round(latency, 2),
            "token_metrics": state.get("token_metrics", {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0, "cost_usd": 0.0}),
        }

    # --- NODE 6: Cache & Finalize ---
    def node_cache_and_finalize(self, state: AgentState) -> Dict[str, Any]:
        query = state["query"]
        generation = state.get("generation", "")
        sources = state.get("sources", [])
        is_escalated = state.get("is_escalated", False)

        # Only store non-escalated, grounded answers in semantic cache
        if not is_escalated and generation:
            self.cache_service.store(query=query, response=generation, sources=sources)

        latency = (time.perf_counter() - state.get("start_time", time.perf_counter())) * 1000.0
        return {
            "latency_ms": round(latency, 2),
        }

    # --- CONDITIONAL ROUTING EDGES ---
    def route_triage_check(self, state: AgentState) -> str:
        if state.get("triage_hit", False):
            return "end"
        return "check_cache"

    def route_cache_check(self, state: AgentState) -> str:
        if state.get("cache_hit", False):
            return "end"
        return "retrieve"

    def route_relevance_gate(self, state: AgentState) -> str:
        score = state.get("relevance_score", 0.0)
        threshold = settings.RETRIEVAL_SIMILARITY_THRESHOLD
        if score < threshold:
            logger.info(f"Relevance Gate: Score {score:.4f} < threshold {threshold} -> Escalate to human")
            return "escalate"
        return "generate"

    def route_grounding_verification(self, state: AgentState) -> str:
        if state.get("is_escalated", False):
            return "escalate"
        return "finalize"

    # --- GRAPH ASSEMBLY ---
    def _build_graph(self):
        builder = StateGraph(AgentState)

        # Add Nodes
        builder.add_node("triage", self.node_deterministic_triage)
        builder.add_node("check_cache", self.node_check_cache)
        builder.add_node("retrieve", self.node_retrieve)
        builder.add_node("generate", self.node_generate)
        builder.add_node("verify_grounding", self.node_verify_grounding)
        builder.add_node("escalate", self.node_escalate)
        builder.add_node("finalize", self.node_cache_and_finalize)

        # Set Entry Point: Zero-Token Deterministic Triage Layer
        builder.set_entry_point("triage")

        # Edge 0: Triage check
        builder.add_conditional_edges(
            "triage",
            self.route_triage_check,
            {
                "end": END,
                "check_cache": "check_cache",
            },
        )

        # Edge 1: Cache check
        builder.add_conditional_edges(
            "check_cache",
            self.route_cache_check,
            {
                "end": END,
                "retrieve": "retrieve",
            },
        )

        # Edge 2: Relevance gate
        builder.add_conditional_edges(
            "retrieve",
            self.route_relevance_gate,
            {
                "generate": "generate",
                "escalate": "escalate",
            },
        )

        # Edge 3: Generation to verification
        builder.add_edge("generate", "verify_grounding")

        # Edge 4: Grounding verification
        builder.add_conditional_edges(
            "verify_grounding",
            self.route_grounding_verification,
            {
                "escalate": "escalate",
                "finalize": "finalize",
            },
        )

        # Terminal Edges
        builder.add_edge("escalate", END)
        builder.add_edge("finalize", END)

        return builder.compile()

    async def ainvoke(
        self,
        query: str,
        session_id: str = "default_session",
        channel: str = "web",
    ) -> AgentState:
        initial_state: AgentState = {
            "query": query.strip(),
            "session_id": session_id,
            "channel": channel,
            "triage_hit": False,
            "cache_hit": False,
            "documents": [],
            "relevance_score": 0.0,
            "generation": "",
            "status": "UNPROCESSED",
            "is_escalated": False,
            "escalation_reason": None,
            "sources": [],
            "start_time": time.perf_counter(),
            "latency_ms": 0.0,
            "token_metrics": {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0, "cost_usd": 0.0},
        }

        result = await self.graph.ainvoke(initial_state)
        return result

    def invoke(
        self,
        query: str,
        session_id: str = "default_session",
        channel: str = "web",
    ) -> AgentState:
        initial_state: AgentState = {
            "query": query.strip(),
            "session_id": session_id,
            "channel": channel,
            "triage_hit": False,
            "cache_hit": False,
            "documents": [],
            "relevance_score": 0.0,
            "generation": "",
            "status": "UNPROCESSED",
            "is_escalated": False,
            "escalation_reason": None,
            "sources": [],
            "start_time": time.perf_counter(),
            "latency_ms": 0.0,
            "token_metrics": {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0, "cost_usd": 0.0},
        }

        result = self.graph.invoke(initial_state)
        return result
