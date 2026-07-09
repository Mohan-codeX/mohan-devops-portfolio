from pydantic import BaseModel, ConfigDict, EmailStr


class ProfileBase(BaseModel):
    # Hero
    full_name: str
    title: str
    about: str
    tagline: str | None = None

    # Contact
    email: EmailStr
    phone: str | None = None
    location: str | None = None

    # Social
    github: str | None = None
    linkedin: str | None = None
    website: str | None = None

    # Assets
    profile_image: str | None = None

    # About Section
    years_of_experience: int | None = None
    projects_completed: int | None = None
    certifications: int | None = None

    # Resume CTA
    resume_title: str | None = None
    resume_description: str | None = None


class ProfileCreate(ProfileBase):
    pass


class ProfileUpdate(ProfileBase):
    pass


class ProfileResponse(ProfileBase):
    id: int

    model_config = ConfigDict(from_attributes=True)
