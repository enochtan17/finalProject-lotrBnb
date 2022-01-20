from flask_wtf import FlaskForm
from wtforms import IntegerField, DateField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    start_date = DateField('start_date', validators=[DataRequired()])
    end_date = DateField('end_date', validators=[DataRequired()])
    num_guests = IntegerField('num_guests', validators=[DataRequired()])
