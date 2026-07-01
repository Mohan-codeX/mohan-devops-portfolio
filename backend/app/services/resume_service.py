import os
import shutil

from fastapi import UploadFile
from sqlalchemy.orm import Session

from app.repositories.resume_repository import ResumeRepository


UPLOAD_DIR = "uploads/resume"


class ResumeService:

    @staticmethod
    def get_resume(db: Session):
        return ResumeRepository.get(db)

    @staticmethod
    def upload_resume(
        db: Session,
        file: UploadFile,
    ):
        os.makedirs(
            UPLOAD_DIR,
            exist_ok=True,
        )

        existing = ResumeRepository.get(db)

        if existing:
            if os.path.exists(existing.file_path):
                os.remove(existing.file_path)

            ResumeRepository.delete(
                db,
                existing,
            )

        file_path = os.path.join(
            UPLOAD_DIR,
            file.filename,
        )

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(
                file.file,
                buffer,
            )

        return ResumeRepository.create(
            db,
            file.filename,
            file_path,
        )