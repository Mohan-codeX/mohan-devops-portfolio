from sqlalchemy.orm import Session

from app.repositories.user_repository import UserRepository
from app.schemas.user import UserCreate
from app.utils.security import hash_password


class UserService:

    @staticmethod
    def create_user(db: Session, user: UserCreate):
        existing_user = UserRepository.get_by_email(db, user.email)

        if existing_user:
            raise ValueError("User already exists")

        hashed_password = hash_password(user.password)

        return UserRepository.create(
            db=db,
            email=user.email,
            full_name=user.full_name,
            hashed_password=hashed_password,
        )

    @staticmethod
    def get_user(db: Session, user_id: int):
        return UserRepository.get_by_id(db, user_id)