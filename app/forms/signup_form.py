from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields.html5 import EmailField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User
import re

def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def password_length(form, field):
    # Password must be at least 8 characters
    password = field.data
    if len(password) < 8:
        raise ValidationError('Password must be at least 8 characters.')

def password_capital(form, field):
    # Password must include at least 1 capital
    password = field.data
    for letter in password:
        if letter.isupper():
            return
    raise ValidationError('Password must have at least 1 capital letter.')

def password_number(form, field):
    # Password must have a number
    password = field.data
    for char in password:
        if char.isdigit():
            return
    raise ValidationError('Password must have at least 1 number.')

def is_email(form, field):
    # Checking if email is in valid email format
    email = field.data
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    if not re.fullmatch(regex, email):
        raise ValidationError('Must be a valid email.')

class SignUpForm(FlaskForm):
    email = EmailField('email', validators=[is_email,
                                            user_exists,
                                            DataRequired()])
    username = StringField('username', validators=[DataRequired(),
                                                    username_exists])
    password = StringField('password', validators=[DataRequired(),
                                                    password_capital,
                                                    password_length,
                                                    password_number])
