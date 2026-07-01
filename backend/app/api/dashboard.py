from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.db.database import get_db
from app.schemas.dashboard import DashboardStats
from app.services.dashboard_service import DashboardService
from app.services.visitor_service import VisitorService
from app.repositories.contact_repository import ContactRepository

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)


@router.get(
    "/stats",
    response_model=DashboardStats,
)
def get_dashboard_stats(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    return DashboardService.get_stats(db)


@router.get("/recent-visitors")
def recent_visitors(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    return VisitorService.latest_visitors(db)


@router.get("/recent-contacts")
def recent_contacts(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    return ContactRepository.latest(db)