from pydantic import BaseModel, ConfigDict


class EducationBase(BaseModel):
    institution: str
    degree: str
    duration: str
    grade: str | None = None


class EducationCreate(EducationBase):
    pass


class EducationUpdate(EducationBase):
    pass


class EducationResponse(EducationBase):
    id: int

    model_config = ConfigDict(from_attributes=True)