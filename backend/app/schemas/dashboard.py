from pydantic import BaseModel


class DashboardStats(BaseModel):
    users: int
    projects: int
    skills: int
    experiences: int
    educations: int
    contacts: int
    unread_contacts: int
    visitors: int