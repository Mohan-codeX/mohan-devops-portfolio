from datetime import datetime

from pydantic import BaseModel, ConfigDict


class VisitorResponse(BaseModel):
    id: int
    ip_address: str
    path: str
    method: str
    user_agent: str | None = None
    visited_at: datetime

    model_config = ConfigDict(from_attributes=True)