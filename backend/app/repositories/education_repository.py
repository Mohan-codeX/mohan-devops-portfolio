from sqlalchemy.orm import Session

from app.models.education import Education
from app.schemas.education import (
    EducationCreate,
    EducationUpdate,
)


class EducationRepository:

    @staticmethod
    def create(db: Session, education: EducationCreate):
        db_education = Education(**education.model_dump())

        db.add(db_education)
        db.commit()
        db.refresh(db_education)

        return db_education

    @staticmethod
    def get_all(db: Session):
        return db.query(Education).all()

    @staticmethod
    def get_by_id(db: Session, education_id: int):
        return (
            db.query(Education)
            .filter(Education.id == education_id)
            .first()
        )

    @staticmethod
    def update(
        db: Session,
        db_education: Education,
        education: EducationUpdate,
    ):
        for key, value in education.model_dump().items():
            setattr(db_education, key, value)

        db.commit()
        db.refresh(db_education)

        return db_education

    @staticmethod
    def delete(
        db: Session,
        db_education: Education,
    ):
        db.delete(db_education)
        db.commit()