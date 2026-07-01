from sqlalchemy.orm import Session

from app.models.resume import Resume


class ResumeRepository:

    @staticmethod
    def get(db: Session):
        return db.query(Resume).first()

    @staticmethod
    def create(
        db: Session,
        file_name: str,
        file_path: str,
    ):
        resume = Resume(
            file_name=file_name,
            file_path=file_path,
        )

        db.add(resume)
        db.commit()
        db.refresh(resume)

        return resume

    @staticmethod
    def delete(
        db: Session,
        resume: Resume,
    ):
        db.delete(resume)
        db.commit()