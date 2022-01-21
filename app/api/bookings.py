from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Listing, Booking, Review
from app.forms.listing_form import ListingForm, EditListingForm
from app.forms.booking_form import BookingForm
from app.forms.review_form import ReviewForm

from .auth_routes import validation_errors_to_error_messages

booking_routes = Blueprint('bookings', __name__)


# GET all bookings for one listing

@booking_routes.route('/listing/<int:listingId>')
@login_required
def get_bookings(listingId):
    bookings = Booking.query.filter(Booking.listing_id == listingId).all()
    return {'bookings': [booking.to_dict() for booking in bookings]}


# POST a booking

@booking_routes.route('/listing/<int:listingId>', methods=['POST'])
@login_required
def add_booking(listingId):
    form = BookingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        booking = Booking(
            listing_id = listingId,
            guest_id = current_user.id,
            start_date = form.start_date.data,
            end_date = form.end_date.data,
            num_guests = form.num_guests.data
        )
        db.session.add(booking)
        db.session.commit()
        return booking.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# EDIT a booking

@booking_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_booking(id):
    form = BookingForm()
    booking = Booking.query.get(id)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        booking.start_date = form.start_date.data
        booking.end_date = form.end_date.data
        booking.num_guests = form.num_guests.data
        db.session.commit()
        return booking.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



# DELETE a booking

@booking_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_booking(id):
    booking = Booking.query.filter_by(id=id).first()
    db.session.delete(booking)
    db.session.commit()
    return booking.to_dict()
