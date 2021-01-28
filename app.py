import os
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for, Markup)
from forms import RegisterForm, LoginForm
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
if os.path.exists("env.py"):
    import env


app = Flask(__name__)


app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html", title="| Travel | Work | Experience | Life Style")


@app.route("/trip")
def trip():
    return render_template("trip.html", title="Trip")


@app.route("/work")
def work():
    return render_template("work.html", title="Work")


@app.route("/life")
def life():
    return render_template("life.html", title="Life")


@app.route("/tips")
def tips():
    return render_template("tips.html", title="Tips")


@app.route("/registration", methods=['GET', 'POST'])
def registration():
    form = RegisterForm()
    if form.validate_on_submit():
        flash(f'Welcome to New Irish Life family {form.username.data}, <a href="\login">LOG IN</a> to your profile!', 'reg-success')
        return redirect(url_for("registration"))
    return render_template('registration.html', title="Registration", form=form)


@app.route("/login", methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        if form.email.data == 'admin@blog.com' and form.password.data == 'password':
            flash('Welcom username', 'success')
            return redirect(url_for('home'))
        else:
            flash('Login Unsuccessful. Please check username and password', 'reg-danger')
            return redirect(url_for('login'))
    return render_template('login.html', title="Login", form=form)


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)