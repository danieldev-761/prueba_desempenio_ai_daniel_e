from typing import List, Optional
from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    query: str = Field(..., min_length=2, description="User question or message", example="¿Cuáles son los precios y horarios del curso intensivo de inglés?")
    session_id: Optional[str] = Field(default=None, description="Optional session thread ID", example="std_session_123")
    channel: str = Field(default="web", description="Inquiry source: 'web', 'telegram', 'webhook'", example="web")


class SourceCitation(BaseModel):
    document: str = Field(..., description="Source markdown file name", example="precios_y_metodos_de_pago.md")
    section: str = Field(..., description="Section title", example="Tarifas Oficiales de Matrícula y Programas")
    chunk_id: Optional[str] = Field(default=None, description="Internal chunk identifier", example="precios_y_metodos_de_pago_chunk_001")


class ChatTelemetry(BaseModel):
    latency_ms: float = Field(..., description="Execution latency in milliseconds", example=512.4)
    cost_usd: float = Field(..., description="Estimated USD cost for the query", example=0.00012)


class ChatResponse(BaseModel):
    response: str = Field(..., description="Assistant response text or human escalation notice")
    status: str = Field(..., description="Resolution status: 'RESOLVED_BY_CACHE', 'RESOLVED_BY_RAG', 'ESCALATED_TO_HUMAN'")
    confidence_score: float = Field(..., description="Highest relevance or cache similarity score (0.0 to 1.0)", example=0.94)
    sources: List[SourceCitation] = Field(default_factory=list, description="List of cited source chunks")
    escalated: bool = Field(..., description="True if inquiry was escalated to human advisor")
    telemetry: ChatTelemetry = Field(..., description="Operational latency and cost metrics")
