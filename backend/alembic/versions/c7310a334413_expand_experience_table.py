"""expand_experience_table

Revision ID: c7310a334413
Revises: 78b395696f77
Create Date: 2026-07-08 06:06:33.311864

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "c7310a334413"
down_revision: Union[str, Sequence[str], None] = "78b395696f77"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""

    op.add_column(
        "experiences",
        sa.Column("location", sa.String(length=255), nullable=True),
    )

    op.add_column(
        "experiences",
        sa.Column(
            "current",
            sa.Boolean(),
            nullable=False,
            server_default=sa.false(),
        ),
    )

    op.add_column(
        "experiences",
        sa.Column("technologies", sa.Text(), nullable=True),
    )

    op.add_column(
        "experiences",
        sa.Column("responsibilities", sa.Text(), nullable=True),
    )

    op.alter_column(
        "experiences",
        "current",
        server_default=None,
    )


def downgrade() -> None:
    """Downgrade schema."""

    op.drop_column("experiences", "responsibilities")
    op.drop_column("experiences", "technologies")
    op.drop_column("experiences", "current")
    op.drop_column("experiences", "location")
