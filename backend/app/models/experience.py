from sqlalchemy import Column, Integer, String, Text

from app.db.database import Base


class Experience(Base):
    __tablename__ = "experiences"

    id = Column(Integer, primary_key=True, index=True)

    company = Column(String(255), nullable=False)

    role = Column(String(255), nullable=False)

    duration = Column(String(100), nullable=False)

    description = Column(Text, nullable=False)