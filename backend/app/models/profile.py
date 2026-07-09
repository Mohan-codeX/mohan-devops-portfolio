from sqlalchemy import Column, Integer, String, Text

from app.db.database import Base


class Profile(Base):
    __tablename__ = "profiles"

    id = Column(Integer, primary_key=True, index=True)

    # Hero Section
    full_name = Column(String(255), nullable=False)
    title = Column(String(255), nullable=False)
    about = Column(Text, nullable=False)
    tagline = Column(Text, nullable=True)

    # Contact
    email = Column(String(255), nullable=False)
    phone = Column(String(50), nullable=True)
    location = Column(String(255), nullable=True)

    # Social Links
    github = Column(String(500), nullable=True)
    linkedin = Column(String(500), nullable=True)
    website = Column(String(500), nullable=True)

    # Assets
    profile_image = Column(String(500), nullable=True)

    # About Section
    years_of_experience = Column(Integer, nullable=True)
    projects_completed = Column(Integer, nullable=True)
    certifications = Column(Integer, nullable=True)

    # CTA
    resume_title = Column(String(255), nullable=True)
    resume_description = Column(Text, nullable=True)
