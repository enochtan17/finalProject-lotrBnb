from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, DecimalField
from wtforms.validators import DataRequired

class ListingForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    address1 = StringField('address1', validators=[DataRequired()])
    address2 = StringField('address2')
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    country = StringField('country', validators=[DataRequired()])
    zipcode = IntegerField('zipcode', validators=[DataRequired()])
    latitude = DecimalField('latitude', validators=[DataRequired()])
    longitude = DecimalField('longitude', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired()])
    image_url = StringField('image_url', validators=[DataRequired()])
