from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, DecimalField
from wtforms.validators import DataRequired

def is_int(form, field):
    # Checking if field is integer
    value = field.data
    if type(value) != int:
        raise ValidationError(str(field) + ' is not a valid integer.')

def is_float(form, field):
    # Checking if field is float
    value = field.data
    if type(value) != float:
        raise ValidationError(str(field) + ' is not a valid number.')

class ListingForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    capacity = IntegerField('capacity', validators=[DataRequired(),
                                                    is_int])
    bedrooms = IntegerField('bedrooms', validators=[DataRequired(),
                                                    is_int])
    beds = IntegerField('beds', validators=[DataRequired(),
                                                    is_int])
    baths = IntegerField('baths', validators=[DataRequired(),
                                                    is_int])
    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    country = StringField('country', validators=[DataRequired()])
    latitude = DecimalField('latitude', validators=[DataRequired(),
                                                    is_float])
    longitude = DecimalField('longitude', validators=[DataRequired(),
                                                    is_float])
    price = IntegerField('price', validators=[DataRequired(),
                                                    is_int])
    image_url = StringField('image_url', validators=[DataRequired()])


class EditListingForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
