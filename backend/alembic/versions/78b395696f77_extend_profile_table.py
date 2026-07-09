"""extend profile table

Revision ID: 78b395696f77
Revises: d057080af864
Create Date: 2026-07-08

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "78b395696f77"
down_revision: Union[str, Sequence[str], None] = "d057080af864"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column(
        "profiles",
        sa.Column("tagline", sa.String(length=255), nullable=True),
    )

    op.add_column(
        "profiles",
        sa.Column("years_of_experience", sa.Integer(), nullable=True),
    )

    op.add_column(
        "profiles",
        sa.Column("projects_completed", sa.Integer(), nullable=True),
    )

    op.add_column(
        "profiles",
        sa.Column("certifications", sa.Integer(), nullable=True),
    )

    op.add_column(
        "profiles",
        sa.Column("resume_title", sa.String(length=255), nullable=True),
    )

    op.add_column(
        "profiles",
        sa.Column("resume_description", sa.Text(), nullable=True),
    )


def downgrade() -> None:
    op.drop_column("profiles", "resume_description")
    op.drop_column("profiles", "resume_title")
    op.drop_column("profiles", "certifications")
    op.drop_column("profiles", "projects_completed")
    op.drop_column("profiles", "years_of_experience")
    op.drop_column("profiles", "tagline")
