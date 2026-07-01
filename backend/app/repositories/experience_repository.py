from sqlalchemy.orm import Session

from app.models.experience import Experience
from app.schemas.experience import (
    ExperienceCreate,
    ExperienceUpdate,
)


class ExperienceRepository:

    @staticmethod
    def create(db: Session, experience: ExperienceCreate):
        db_experience = Experience(**experience.model_dump())

        db.add(db_experience)
        db.commit()
        db.refresh(db_experience)

        return db_experience

    @staticmethod
    def get_all(db: Session):
        return db.query(Experience).all()

    @staticmethod
    def get_by_id(db: Session, experience_id: int):
        return (
            db.query(Experience)
            .filter(Experience.id == experience_id)
            .first()
        )

    @staticmethod
    def update(
        db: Session,
        db_experience: Experience,
        experience: ExperienceUpdate,
    ):
        for key, value in experience.model_dump().items():
            setattr(db_experience, key, value)

        db.commit()
        db.refresh(db_experience)

        return db_experience

    @staticmethod
    def delete(
        db: Session,
        db_experience: Experience,
    ):
        db.delete(db_experience)
        db.commit()