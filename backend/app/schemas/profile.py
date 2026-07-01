from pydantic import BaseModel, ConfigDict, EmailStr


class ProfileBase(BaseModel):
    full_name: str
    title: str
    about: str
    email: EmailStr
    phone: str | None = None
    location: str | None = None
    github: str | None = None
    linkedin: str | None = None
    website: str | None = None
    profile_image: str | None = None


class ProfileCreate(ProfileBase):
    pass


class ProfileUpdate(ProfileBase):
    pass


class ProfileResponse(ProfileBase):
    id: int

    model_config = ConfigDict(from_attributes=True)