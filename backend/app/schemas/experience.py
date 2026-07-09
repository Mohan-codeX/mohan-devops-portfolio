from typing import List

from pydantic import BaseModel, ConfigDict, Field


class ExperienceBase(BaseModel):
    company: str
    role: str
    duration: str
    location: str | None = None
    current: bool = False
    technologies: List[str] = Field(default_factory=list)
    responsibilities: List[str] = Field(default_factory=list)
    description: str


class ExperienceCreate(ExperienceBase):
    pass


class ExperienceUpdate(ExperienceBase):
    pass


class ExperienceResponse(ExperienceBase):
    id: int

    model_config = ConfigDict(from_attributes=True)
