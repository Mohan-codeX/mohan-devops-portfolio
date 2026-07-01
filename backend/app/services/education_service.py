from sqlalchemy.orm import Session

from app.repositories.education_repository import (
    EducationRepository,
)
from app.schemas.education import (
    EducationCreate,
    EducationUpdate,
)


class EducationService:

    @staticmethod
    def create_education(
        db: Session,
        education: EducationCreate,
    ):
        return EducationRepository.create(
            db,
            education,
        )

    @staticmethod
    def get_educations(db: Session):
        return EducationRepository.get_all(db)

    @staticmethod
    def get_education(
        db: Session,
        education_id: int,
    ):
        return EducationRepository.get_by_id(
            db,
            education_id,
        )

    @staticmethod
    def update_education(
        db: Session,
        education_id: int,
        education: EducationUpdate,
    ):
        db_education = EducationRepository.get_by_id(
            db,
            education_id,
        )

        if not db_education:
            raise ValueError("Education not found")

        return EducationRepository.update(
            db,
            db_education,
            education,
        )

    @staticmethod
    def delete_education(
        db: Session,
        education_id: int,
    ):
        db_education = EducationRepository.get_by_id(
            db,
            education_id,
        )

        if not db_education:
            raise ValueError("Education not found")

        EducationRepository.delete(
            db,
            db_education,
        )