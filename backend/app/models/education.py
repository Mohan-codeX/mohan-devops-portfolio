from sqlalchemy import Column, Integer, String

from app.db.database import Base


class Education(Base):
    __tablename__ = "educations"

    id = Column(Integer, primary_key=True, index=True)

    institution = Column(String(255), nullable=False)

    degree = Column(String(255), nullable=False)

    duration = Column(String(100), nullable=False)

    grade = Column(String(100), nullable=True)