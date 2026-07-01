from fastapi import FastAPI


from app.api.auth import router as auth_router
from app.api.project import router as project_router
from app.api.skill import router as skill_router
from app.api.user import router as user_router
from app.api.experience import router as experience_router
from app.api.education import router as education_router
from app.api.contact import router as contact_router
from app.api.profile import router as profile_router
from app.api.resume import router as resume_router
from app.middleware.visitor_tracking import VisitorTrackingMiddleware
from app.api.dashboard import router as dashboard_router


app = FastAPI(
    title="Mohan Portfolio API",
    version="1.0.0",
)

app.include_router(user_router)
app.include_router(auth_router)
app.include_router(project_router)
app.include_router(skill_router)
app.include_router(experience_router)
app.include_router(education_router)
app.include_router(contact_router)
app.include_router(profile_router)
app.include_router(resume_router)
app.add_middleware(VisitorTrackingMiddleware)
app.include_router(dashboard_router)




@app.get("/")
def root():
    return {
        "message": "Mohan Portfolio API is running."
    }