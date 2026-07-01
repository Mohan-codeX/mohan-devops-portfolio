from sqlalchemy.orm import Session

from app.repositories.experience_repository import (
    ExperienceRepository,
)
from app.schemas.experience import (
    ExperienceCreate,
    ExperienceUpdate,
)


class ExperienceService:

    @staticmethod
    def create_experience(
        db: Session,
        experience: ExperienceCreate,
    ):
        return ExperienceRepository.create(
            db,
            experience,
        )

    @staticmethod
    def get_experiences(db: Session):
        return ExperienceRepository.get_all(db)

    @staticmethod
    def get_experience(
        db: Session,
        experience_id: int,
    ):
        return ExperienceRepository.get_by_id(
            db,
            experience_id,
        )

    @staticmethod
    def update_experience(
        db: Session,
        experience_id: int,
        experience: ExperienceUpdate,
    ):
        db_experience = ExperienceRepository.get_by_id(
            db,
            experience_id,
        )

        if not db_experience:
            raise ValueError("Experience not found")

        return ExperienceRepository.update(
            db,
            db_experience,
            experience,
        )

    @staticmethod
    def delete_experience(
        db: Session,
        experience_id: int,
    ):
        db_experience = ExperienceRepository.get_by_id(
            db,
            experience_id,
        )

        if not db_experience:
            raise ValueError("Experience not found")

        ExperienceRepository.delete(
            db,
            db_experience,
        )