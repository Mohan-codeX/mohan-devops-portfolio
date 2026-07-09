import json

from sqlalchemy.orm import Session

from app.models.experience import Experience
from app.schemas.experience import (
    ExperienceCreate,
    ExperienceUpdate,
)


class ExperienceRepository:

    @staticmethod
    def _to_db(data: dict) -> dict:
        data = data.copy()

        data["technologies"] = json.dumps(
            data.get("technologies", [])
        )

        data["responsibilities"] = json.dumps(
            data.get("responsibilities", [])
        )

        return data

    @staticmethod
    def _to_response(experience: Experience) -> Experience:
        try:
            experience.technologies = (
                json.loads(experience.technologies)
                if experience.technologies
                else []
            )
        except Exception:
            experience.technologies = []

        try:
            experience.responsibilities = (
                json.loads(experience.responsibilities)
                if experience.responsibilities
                else []
            )
        except Exception:
            experience.responsibilities = []

        return experience

    @staticmethod
    def create(db: Session, experience: ExperienceCreate):
        db_experience = Experience(
            **ExperienceRepository._to_db(
                experience.model_dump()
            )
        )

        db.add(db_experience)
        db.commit()
        db.refresh(db_experience)

        return ExperienceRepository._to_response(db_experience)

    @staticmethod
    def get_all(db: Session):
        experiences = db.query(Experience).all()

        return [
            ExperienceRepository._to_response(exp)
            for exp in experiences
        ]

    @staticmethod
    def get_by_id(
        db: Session,
        experience_id: int,
    ):
        experience = (
            db.query(Experience)
            .filter(Experience.id == experience_id)
            .first()
        )

        if experience:
            return ExperienceRepository._to_response(
                experience
            )

        return None

    @staticmethod
    def update(
        db: Session,
        db_experience: Experience,
        experience: ExperienceUpdate,
    ):
        for key, value in ExperienceRepository._to_db(
            experience.model_dump()
        ).items():
            setattr(db_experience, key, value)

        db.commit()
        db.refresh(db_experience)

        return ExperienceRepository._to_response(
            db_experience
        )

    @staticmethod
    def delete(
        db: Session,
        db_experience: Experience,
    ):
        db.delete(db_experience)
        db.commit()
