from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Listing, Booking, Review
from app.forms.listing_form import ListingForm, EditListingForm
from app.forms.booking_form import BookingForm
from app.forms.review_form import ReviewForm

from .auth_routes import validation_errors_to_error_messages

listing_routes = Blueprint('listings', __name__)

# GET all listings

@listing_routes.route('/')
@login_required
def all_listings():
    listings = Listing.query.all()
    return {'listings': [listing.to_dict() for listing in listings]}


# GET one listing

@listing_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_one_listing(id):
    listing = Listing.query.get(id)
    return listing.to_dict()


# POST one listing

@listing_routes.route('/', methods=['POST'])
@login_required
def newListing():
    form = ListingForm()
    form['csrf_toekn'].data = request.cookies['csrf_token']
    if form.name.data:
        listing = Listing(
            owner_id = current_user.id,
            name = form.name.data,
            description = form.description.data
            address1 = form.address1.data
            address2 = form.address2.data
            city = form.city.data
            state = form.state.data
            country = form.country.data
            zipcode = form.zipcode.data
            latitude = form.latitude.data
            longitude = form.longitude.data
            price = form.price.data
            image_url = form.image_url.data
        )
        db.session.add(listing)
        db.session.commit()

        return listing.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# EDIT listing

@listing_routes.route('/edit/<int:id>', methods=['PUT'])
@login_required
def edit_listing(id):
    listing = Listing.query.get(id)
    form = EditListingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        listing.name = form.name.data
        listing.description = form.description.data
        db.session.commit()
        return listing.to_dict()
    return {}


# DELETE listing

@listing_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_listing(id):
    listing = Listing.query.filter_by(id=id).first()
    db.session.delete(listing)
    db.session.commit()
    return listing.to_dict()
