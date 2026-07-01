from sqlalchemy.orm import Session

from app.models.contact import Contact
from app.models.education import Education
from app.models.experience import Experience
from app.models.project import Project
from app.models.skill import Skill
from app.models.user import User
from app.models.visitor import Visitor


class DashboardService:

    @staticmethod
    def get_stats(db: Session):
        return {
            "users": db.query(User).count(),
            "projects": db.query(Project).count(),
            "skills": db.query(Skill).count(),
            "experiences": db.query(Experience).count(),
            "educations": db.query(Education).count(),
            "contacts": db.query(Contact).count(),
            "unread_contacts": db.query(Contact)
            .filter(Contact.is_read.is_(False))
            .count(),
            "visitors": db.query(Visitor).count(),
        }