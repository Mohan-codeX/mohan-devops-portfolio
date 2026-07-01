from sqlalchemy.orm import Session

from app.repositories.skill_repository import SkillRepository
from app.schemas.skill import SkillCreate, SkillUpdate


class SkillService:

    @staticmethod
    def create_skill(
        db: Session,
        skill: SkillCreate,
    ):
        return SkillRepository.create(db, skill)

    @staticmethod
    def get_skills(db: Session):
        return SkillRepository.get_all(db)

    @staticmethod
    def get_skill(
        db: Session,
        skill_id: int,
    ):
        return SkillRepository.get_by_id(
            db,
            skill_id,
        )

    @staticmethod
    def update_skill(
        db: Session,
        skill_id: int,
        skill: SkillUpdate,
    ):
        db_skill = SkillRepository.get_by_id(
            db,
            skill_id,
        )

        if not db_skill:
            raise ValueError("Skill not found")

        return SkillRepository.update(
            db,
            db_skill,
            skill,
        )

    @staticmethod
    def delete_skill(
        db: Session,
        skill_id: int,
    ):
        db_skill = SkillRepository.get_by_id(
            db,
            skill_id,
        )

        if not db_skill:
            raise ValueError("Skill not found")

        SkillRepository.delete(
            db,
            db_skill,
        )