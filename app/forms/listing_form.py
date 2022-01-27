from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, DecimalField
from wtforms.validators import DataRequired

class ListingForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    capacity = IntegerField('capacity', validators=[DataRequired()])
    bedrooms = IntegerField('bedrooms', validators=[DataRequired()])
    beds = IntegerField('beds', validators=[DataRequired()])
    baths = IntegerField('baths', validators=[DataRequired()])
    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    country = StringField('country', validators=[DataRequired()])
    latitude = DecimalField('latitude', validators=[DataRequired()])
    longitude = DecimalField('longitude', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired()])
    image_url = StringField('image_url', validators=[DataRequired()])


class EditListingForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
