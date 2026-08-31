from pydantic import BaseModel, Field


class TokensConsumed(BaseModel):
    prompt_tokens: int = Field(default=0, description="Total prompt tokens consumed")
    completion_tokens: int = Field(default=0, description="Total completion tokens generated")
    total: int = Field(default=0, description="Total tokens consumed")


class MetricsSummary(BaseModel):
    total_queries_processed: int = Field(..., description="Total count of inquiries processed", example=340)
    resolved_by_faq_triage: int = Field(default=0, description="Inquiries resolved by zero-token deterministic triage", example=45)
    resolved_by_cache: int = Field(..., description="Inquiries resolved by semantic cache", example=120)
    resolved_by_rag: int = Field(..., description="Inquiries resolved by RAG pipeline", example=185)
    escalated_to_human: int = Field(..., description="Inquiries escalated to human advisors", example=35)
    escalation_rate_pct: float = Field(..., description="Percentage of total inquiries escalated", example=10.29)
    total_tokens_consumed: TokensConsumed = Field(..., description="Aggregated token counts")
    total_cost_usd: float = Field(..., description="Aggregated cost across all queries in USD", example=0.0482)
    average_latency_ms: float = Field(..., description="Average round-trip latency in milliseconds", example=540.2)
