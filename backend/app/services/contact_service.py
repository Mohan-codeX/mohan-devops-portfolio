from sqlalchemy.orm import Session

from app.repositories.contact_repository import ContactRepository
from app.schemas.contact import ContactCreate, ContactUpdate


class ContactService:

    @staticmethod
    def create_contact(
        db: Session,
        contact: ContactCreate,
    ):
        return ContactRepository.create(
            db,
            contact,
        )

    @staticmethod
    def get_contacts(db: Session):
        return ContactRepository.get_all(db)

    @staticmethod
    def get_contact(
        db: Session,
        contact_id: int,
    ):
        return ContactRepository.get_by_id(
            db,
            contact_id,
        )

    @staticmethod
    def update_contact(
        db: Session,
        contact_id: int,
        contact: ContactUpdate,
    ):
        db_contact = ContactRepository.get_by_id(
            db,
            contact_id,
        )

        if not db_contact:
            raise ValueError("Contact not found")

        return ContactRepository.update(
            db,
            db_contact,
            contact,
        )

    @staticmethod
    def delete_contact(
        db: Session,
        contact_id: int,
    ):
        db_contact = ContactRepository.get_by_id(
            db,
            contact_id,
        )

        if not db_contact:
            raise ValueError("Contact not found")

        ContactRepository.delete(
            db,
            db_contact,
        )