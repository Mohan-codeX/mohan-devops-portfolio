from sqlalchemy import Column, Integer, String, Text

from app.db.database import Base


class Profile(Base):
    __tablename__ = "profiles"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String(255), nullable=False)

    title = Column(String(255), nullable=False)

    about = Column(Text, nullable=False)

    email = Column(String(255), nullable=False)

    phone = Column(String(50), nullable=True)

    location = Column(String(255), nullable=True)

    github = Column(String(500), nullable=True)

    linkedin = Column(String(500), nullable=True)

    website = Column(String(500), nullable=True)

    profile_image = Column(String(500), nullable=True)