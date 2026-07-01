from sqlalchemy import desc
from sqlalchemy.orm import Session

from app.models.visitor import Visitor


class VisitorRepository:

    @staticmethod
    def create(
        db: Session,
        ip_address: str,
        path: str,
        method: str,
        user_agent: str | None,
    ):
        visitor = Visitor(
            ip_address=ip_address,
            path=path,
            method=method,
            user_agent=user_agent,
        )

        db.add(visitor)
        db.commit()

    @staticmethod
    def total(db: Session):
        return db.query(Visitor).count()

    @staticmethod
    def latest(
        db: Session,
        limit: int = 10,
    ):
        return (
            db.query(Visitor)
            .order_by(desc(Visitor.visited_at))
            .limit(limit)
            .all()
        )