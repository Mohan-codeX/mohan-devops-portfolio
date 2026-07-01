from sqlalchemy.orm import Session

from app.models.contact import Contact
from app.schemas.contact import ContactCreate, ContactUpdate


class ContactRepository:

    @staticmethod
    def create(db: Session, contact: ContactCreate):
        db_contact = Contact(**contact.model_dump())

        db.add(db_contact)
        db.commit()
        db.refresh(db_contact)

        return db_contact

    @staticmethod
    def get_all(db: Session):
        return db.query(Contact).all()

    @staticmethod
    def get_by_id(db: Session, contact_id: int):
        return (
            db.query(Contact)
            .filter(Contact.id == contact_id)
            .first()
        )

    @staticmethod
    def update(
        db: Session,
        db_contact: Contact,
        contact: ContactUpdate,
    ):
        for key, value in contact.model_dump().items():
            setattr(db_contact, key, value)

        db.commit()
        db.refresh(db_contact)

        return db_contact

        @staticmethod
        def latest(
            db: Session,
            limit: int = 10,
        ):
            return (
                db.query(Contact)
                .order_by(Contact.id.desc())
                .limit(limit)
                .all()
            )