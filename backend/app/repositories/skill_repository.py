from sqlalchemy.orm import Session

from app.models.skill import Skill
from app.schemas.skill import SkillCreate, SkillUpdate


class SkillRepository:

    @staticmethod
    def create(db: Session, skill: SkillCreate):
        db_skill = Skill(**skill.model_dump())

        db.add(db_skill)
        db.commit()
        db.refresh(db_skill)

        return db_skill

    @staticmethod
    def get_all(db: Session):
        return db.query(Skill).all()

    @staticmethod
    def get_by_id(db: Session, skill_id: int):
        return (
            db.query(Skill)
            .filter(Skill.id == skill_id)
            .first()
        )

    @staticmethod
    def update(
        db: Session,
        db_skill: Skill,
        skill: SkillUpdate,
    ):
        for key, value in skill.model_dump().items():
            setattr(db_skill, key, value)

        db.commit()
        db.refresh(db_skill)

        return db_skill

    @staticmethod
    def delete(
        db: Session,
        db_skill: Skill,
    ):
        db.delete(db_skill)
        db.commit()