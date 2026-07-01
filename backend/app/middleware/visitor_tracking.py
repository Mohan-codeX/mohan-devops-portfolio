from starlette.middleware.base import BaseHTTPMiddleware

from app.db.database import SessionLocal
from app.services.visitor_service import VisitorService


class VisitorTrackingMiddleware(BaseHTTPMiddleware):

    async def dispatch(self, request, call_next):
        response = await call_next(request)

        db = SessionLocal()

        try:
            VisitorService.log_visit(
                db=db,
                ip_address=request.client.host if request.client else "unknown",
                path=request.url.path,
                method=request.method,
                user_agent=request.headers.get("user-agent"),
            )
        finally:
            db.close()

        return response