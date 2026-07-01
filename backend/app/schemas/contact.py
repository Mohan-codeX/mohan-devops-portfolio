from pydantic import BaseModel, ConfigDict, EmailStr


class ContactBase(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


class ContactCreate(ContactBase):
    pass


class ContactUpdate(BaseModel):
    is_read: bool


class ContactResponse(ContactBase):
    id: int
    is_read: bool

    model_config = ConfigDict(from_attributes=True)