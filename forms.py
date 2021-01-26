from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo

class RegisterForm(FlaskForm):
    username = StringField( 'Username', validators=[DataRequired("Enter your username!"), Length(min=2, max=10, message="Must be more that 1 character")], 
                            render_kw={"placeholder": "Username"})

    useremail = StringField('Useremail', [DataRequired('Email can\'t be blank'), Email('Enter a valid email address')], 
                            render_kw={"placeholder": "Email"})

    password = PasswordField('Password',[DataRequired("Enter a password")], 
                            render_kw={"placeholder": "Password"})

    confirm_password = PasswordField('Confirm Password', [DataRequired("Confirm password"), EqualTo('password', 'Passwords must match')],
                            render_kw={"placeholder": "Confirm Password"})

    submit = SubmitField('SING UP')


class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired('Wrong email adderess'), Email('Enter correct email address')],
                        render_kw={"placeholder": "Your Email"})

    password = PasswordField('Password', validators=[DataRequired("Enter correct password")],
                            render_kw={"placeholder": "Enter a password"})

    remember = BooleanField('Remember Me')
    submit = SubmitField('LOGIN')