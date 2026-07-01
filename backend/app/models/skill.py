from sqlalchemy import Column, Integer, String

from app.db.database import Base


class Skill(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(100), nullable=False)

    category = Column(String(100), nullable=False)

    level = Column(Integer, nullable=False)