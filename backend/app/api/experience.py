from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.db.database import get_db
from app.schemas.experience import (
    ExperienceCreate,
    ExperienceResponse,
    ExperienceUpdate,
)
from app.services.experience_service import ExperienceService

router = APIRouter(
    prefix="/experiences",
    tags=["Experiences"],
)


@router.post(
    "/",
    response_model=ExperienceResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_experience(
    experience: ExperienceCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    return ExperienceService.create_experience(
        db,
        experience,
    )


@router.get(
    "/",
    response_model=list[ExperienceResponse],
)
def get_experiences(
    db: Session = Depends(get_db),
):
    return ExperienceService.get_experiences(db)


@router.get(
    "/{experience_id}",
    response_model=ExperienceResponse,
)
def get_experience(
    experience_id: int,
    db: Session = Depends(get_db),
):
    experience = ExperienceService.get_experience(
        db,
        experience_id,
    )

    if not experience:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Experience not found",
        )

    return experience


@router.put(
    "/{experience_id}",
    response_model=ExperienceResponse,
)
def update_experience(
    experience_id: int,
    experience: ExperienceUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    try:
        return ExperienceService.update_experience(
            db,
            experience_id,
            experience,
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(exc),
        )


@router.delete(
    "/{experience_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_experience(
    experience_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    try:
        ExperienceService.delete_experience(
            db,
            experience_id,
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(exc),
        )