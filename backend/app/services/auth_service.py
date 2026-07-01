from sqlalchemy.orm import Session

from app.repositories.user_repository import UserRepository
from app.utils.jwt import create_access_token
from app.utils.security import verify_password


class AuthService:

    @staticmethod
    def login(email: str, password: str, db: Session) -> str:
        """
        Authenticate a user and return a JWT access token.
        """

        user = UserRepository.get_by_email(db, email)

        if not user:
            raise ValueError("Invalid email or password")

        if not verify_password(password, user.hashed_password):
            raise ValueError("Invalid email or password")

        access_token = create_access_token(
            data={"sub": str(user.id)}
        )

        return access_token