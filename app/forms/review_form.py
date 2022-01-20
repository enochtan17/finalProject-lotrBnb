from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    rating = IntegerField('rating', validators=[DataRequired()])
    comment = TextAreaField('comment', validators=[DataRequired()])
