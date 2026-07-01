from sqlalchemy.orm import Session

from app.models.profile import Profile
from app.schemas.profile import ProfileCreate, ProfileUpdate


class ProfileRepository:

    @staticmethod
    def create(db: Session, profile: ProfileCreate):
        db_profile = Profile(**profile.model_dump())

        db.add(db_profile)
        db.commit()
        db.refresh(db_profile)

        return db_profile

    @staticmethod
    def get(db: Session):
        return db.query(Profile).first()

    @staticmethod
    def update(
        db: Session,
        db_profile: Profile,
        profile: ProfileUpdate,
    ):
        for key, value in profile.model_dump().items():
            setattr(db_profile, key, value)

        db.commit()
        db.refresh(db_profile)

        return db_profile