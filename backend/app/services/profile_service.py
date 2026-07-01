from sqlalchemy.orm import Session

from app.repositories.profile_repository import ProfileRepository
from app.schemas.profile import ProfileCreate, ProfileUpdate


class ProfileService:

    @staticmethod
    def get_profile(db: Session):
        return ProfileRepository.get(db)

    @staticmethod
    def create_profile(
        db: Session,
        profile: ProfileCreate,
    ):
        return ProfileRepository.create(
            db,
            profile,
        )

    @staticmethod
    def update_profile(
        db: Session,
        profile: ProfileUpdate,
    ):
        db_profile = ProfileRepository.get(db)

        if db_profile is None:
            return ProfileRepository.create(
                db,
                ProfileCreate(**profile.model_dump()),
            )

        return ProfileRepository.update(
            db,
            db_profile,
            profile,
        )