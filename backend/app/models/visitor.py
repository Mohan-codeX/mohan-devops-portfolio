from sqlalchemy import Column, DateTime, Integer, String
from sqlalchemy.sql import func

from app.db.database import Base


class Visitor(Base):
    __tablename__ = "visitors"

    id = Column(Integer, primary_key=True, index=True)

    ip_address = Column(String(100), nullable=False)

    path = Column(String(255), nullable=False)

    method = Column(String(20), nullable=False)

    user_agent = Column(String(1000), nullable=True)

    visited_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )