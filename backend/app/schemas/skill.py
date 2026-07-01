from pydantic import BaseModel, ConfigDict


class SkillBase(BaseModel):
    name: str
    category: str
    level: int


class SkillCreate(SkillBase):
    pass


class SkillUpdate(SkillBase):
    pass


class SkillResponse(SkillBase):
    id: int

    model_config = ConfigDict(from_attributes=True)
    