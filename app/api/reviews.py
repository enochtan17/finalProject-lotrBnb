from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Listing, Booking, Review
from app.forms.listing_form import ListingForm, EditListingForm
from app.forms.booking_form import BookingForm
from app.forms.review_form import ReviewForm

from .auth_routes import validation_errors_to_error_messages

review_routes = Blueprint('reviews', __name__)


# GET all reviews for a listing

@review_routes.route('/listing/<int:listingId>')
@login_required
def get_reviews(listingId):
    reviews = Review.query.filter(Review.listing_id == listingId).all()
    return {'reviews': [review.to_dict() for review in reviews]}


# POST review

@review_routes.route('/listing/<int:listingId>', methods=['POST'])
@login_required
def add_review(listingId):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            listing_id = listingId,
            guest_id = current_user.id,
            rating = form.rating.data,
            comment = form.comment.data
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# EDIT review

@review_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_review(id):
    form = ReviewForm()
    review = Review.query.get(id)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review.rating = form.rating.data
        review.comment = form.comment.data
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# DELETE review

@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    review = Review.query.filter_by(id=id).first()
    db.session.delete(review)
    db.session.commit()
    return review.to_dict()
