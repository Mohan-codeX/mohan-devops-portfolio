from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.db.database import get_db
from app.schemas.education import (
    EducationCreate,
    EducationResponse,
    EducationUpdate,
)
from app.services.education_service import EducationService

router = APIRouter(
    prefix="/educations",
    tags=["Educations"],
)


@router.post(
    "/",
    response_model=EducationResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_education(
    education: EducationCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    return EducationService.create_education(
        db,
        education,
    )


@router.get(
    "/",
    response_model=list[EducationResponse],
)
def get_educations(
    db: Session = Depends(get_db),
):
    return EducationService.get_educations(db)


@router.get(
    "/{education_id}",
    response_model=EducationResponse,
)
def get_education(
    education_id: int,
    db: Session = Depends(get_db),
):
    education = EducationService.get_education(
        db,
        education_id,
    )

    if not education:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Education not found",
        )

    return education


@router.put(
    "/{education_id}",
    response_model=EducationResponse,
)
def update_education(
    education_id: int,
    education: EducationUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    try:
        return EducationService.update_education(
            db,
            education_id,
            education,
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(exc),
        )


@router.delete(
    "/{education_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_education(
    education_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    try:
        EducationService.delete_education(
            db,
            education_id,
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(exc),
        )