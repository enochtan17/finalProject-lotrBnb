from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    # bio = db.Column(db.Text, nullable=False)

    # attr_name = db.relationship('className', backref='reference of this tables entire object when queried by attr_name in 'className' class Model')
    # back_populates = must do in both, attr_name & back_populates = 'other_attr_name' are opposites in their respective Classes

    listing = db.relationship(
        'Listing',
        back_populates='owner',
        cascade='all, delete'
    )
    booking = db.relationship(
        'Booking',
        back_populates='guest',
        cascade='all, delete'
    )
    review = db.relationship(
        'Review',
        back_populates='guest',
        cascade='all, delete'
    )

    # below sets the table column name 'password' under the User model to self.hashed_password, which is set on line 13, and generates a hashed pw under the .setter.
    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    # checks the hash of self.password's value against the hash of the password variable's value
    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }



class Listing(db.Model):
    __tablename__ = 'listings'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    capacity = db.Column(db.Integer, nullable=False)
    bedrooms = db.Column(db.Integer, nullable=False)
    beds = db.Column(db.Integer, nullable=False)
    baths = db.Column(db.Integer, nullable=False)
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    country = db.Column(db.String(100), nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    image_url = db.Column(db.String(255), nullable=False)

    owner = db.relationship(
        'User',
        back_populates='listing'
    )
    booking = db.relationship(
        'Booking',
        back_populates='listing',
        cascade='all, delete'
    )
    review = db.relationship(
        'Review',
        back_populates='listing',
        cascade='all, delete'
    )

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'name': self.name,
            'description': self.description,
            'capacity': self.capacity,
            'bedrooms': self.bedrooms,
            'beds': self.beds,
            'baths': self.baths,
            'address': self.address,
            'city': self.city,
            'country': self.country,
            'latitude': self.latitude,
            'longitude': self.longitude,
            'price': self.price,
            'image_url': self.image_url
        }


class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)
    guest_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    start_date = db.Column(db.DateTime, nullable=False)
    end_date = db.Column(db.DateTime, nullable=False)
    num_guests = db.Column(db.Integer, nullable=False)

    guest = db.relationship(
        'User',
        back_populates='booking'
    )
    listing = db.relationship(
        'Listing',
        back_populates='booking'
    )

    def to_dict(self):
        return {
            'id': self.id,
            'listing_id': self.listing_id,
            'guest_id': self.guest_id,
            'start_date': self.start_date,
            'end_date': self.end_date,
            'num_guests': self.num_guests
        }


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)
    guest_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.Text, nullable=False)

    guest = db.relationship(
        'User',
        back_populates='review'
    )
    listing = db.relationship(
        'Listing',
        back_populates='review'
    )

    def to_dict(self):
        return {
            'id': self.id,
            'listing_id': self.listing_id,
            'guest_id': self.guest_id,
            'rating': self.rating,
            'comment': self.comment
        }
