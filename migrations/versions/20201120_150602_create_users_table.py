"""create_users_table

Revision ID: ffdc0a98111c
Revises:
Create Date: 2020-11-20 15:06:02.230689

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ffdc0a98111c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )

    op.create_table('listings',
    sa.Column('id', sa.Integer(), nullable=False)
    sa.Column('owner_id', sa.Integer(), nullable=False)
    sa.Column('name', sa.String(length=100), nullable=False)
    sa.Column('description', sa.Text(), nullable=False)
    sa.Column('address1', sa.String(length=255), nullable=False)
    sa.Column('address2', sa.String(length=255))
    sa.Column('city', sa.String(length=100), nullable=False)
    sa.Column('state', sa.String(length=100), nullable=False)
    sa.Column('country', sa.String(length=100), nullable=False)
    sa.Column('zipcode', sa.Integer(), nullable=False)
    sa.Column('latitude', sa.Float(), nullable=False)
    sa.Column('longitude', sa.Float(),nullable=False)
    sa.Column('price', sa.Integer(), nullable=False)
    sa.Column('image_url', sa.String(length=255), nullable=False)
    sa.ForeignKeyConstraint(['owner_id'], ['users.id'])
    sa.PrimaryKeyConstraint('id')
    )

    op.create_table('bookings',
    sa.Column('id', sa.Integer(), nullable=False)
    sa.Column('listing_id', sa.Integer(), nullable=False)
    sa.Column('guest_id', sa.Integer(), nullable=False)
    sa.Column('start_date', sa.DateTime(), nullable=False)
    sa.Column('end_date', sa.DateTime(), nullable=False)
    sa.Column('num_guests', sa.Integer(), nullable=False)
    sa.ForeignKeyConstraint(['listing_id'], ['listings.id'])
    sa.ForeignKeyConstraint(['guest_id'], ['users.id'])
    sa.PrimaryKeyConstraint('id')
    )

    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('listing_id', sa.Integer(), nullable=False),
    sa.Column('guest_id', sa.Integer(), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.Column('comment', sa.Text(), nullable=False),
    sa.ForeignKeyConstraint(['listing_id'], ['listings.id']),
    sa.ForeignKeyConstraint(['guest_id'], ['users.id']),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('listings')
    op.drop_table('bookings')
    op.drop_table('reviews')
    # ### end Alembic commands ###
