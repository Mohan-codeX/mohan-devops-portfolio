from sqlalchemy import Boolean, Column, Integer, String, Text

from app.db.database import Base


class Experience(Base):
    __tablename__ = "experiences"

    id = Column(Integer, primary_key=True, index=True)

    company = Column(String(255), nullable=False)

    role = Column(String(255), nullable=False)

    duration = Column(String(100), nullable=False)

    location = Column(String(255), nullable=True)

    current = Column(Boolean, nullable=False, default=False)

    technologies = Column(Text, nullable=True)

    responsibilities = Column(Text, nullable=True)

    description = Column(Text, nullable=False)
