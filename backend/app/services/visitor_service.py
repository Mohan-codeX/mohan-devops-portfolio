from sqlalchemy.orm import Session

from app.repositories.visitor_repository import VisitorRepository


class VisitorService:

    @staticmethod
    def log_visit(
        db: Session,
        ip_address: str,
        path: str,
        method: str,
        user_agent: str | None,
    ):
        VisitorRepository.create(
            db,
            ip_address,
            path,
            method,
            user_agent,
        )

    @staticmethod
    def total_visitors(db: Session):
        return VisitorRepository.total(db)

    @staticmethod
    def latest_visitors(db: Session):
        return VisitorRepository.latest(db)