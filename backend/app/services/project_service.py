from sqlalchemy.orm import Session

from app.repositories.project_repository import ProjectRepository
from app.schemas.project import ProjectCreate, ProjectUpdate


class ProjectService:

    @staticmethod
    def create_project(db: Session, project: ProjectCreate):
        return ProjectRepository.create(db, project)

    @staticmethod
    def get_projects(db: Session):
        return ProjectRepository.get_all(db)

    @staticmethod
    def get_project(db: Session, project_id: int):
        return ProjectRepository.get_by_id(db, project_id)

    @staticmethod
    def update_project(
        db: Session,
        project_id: int,
        project: ProjectUpdate,
    ):
        db_project = ProjectRepository.get_by_id(db, project_id)

        if not db_project:
            raise ValueError("Project not found")

        return ProjectRepository.update(
            db,
            db_project,
            project,
        )

    @staticmethod
    def delete_project(
        db: Session,
        project_id: int,
    ):
        db_project = ProjectRepository.get_by_id(db, project_id)

        if not db_project:
            raise ValueError("Project not found")

        ProjectRepository.delete(db, db_project)