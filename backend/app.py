from flask import Flask, jsonify, request, render_template, redirect, session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import google.generativeai as genai
import os
from dotenv import load_dotenv


from werkzeug.security import generate_password_hash, check_password_hash

load_dotenv()

app = Flask(__name__)
CORS(app, supports_credentials=True)  # Enable CORS for frontend-backend communication
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///courses.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your_secret_key'  # For session management

db = SQLAlchemy(app)

# Define User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password_hash = db.Column(db.String(256), nullable=False)
    name = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {"id": self.id, "email": self.email, "name": self.name}

# Define Course model
class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    course_number = db.Column(db.String(10), nullable=False, unique=True)
    course_id = db.Column(db.String(10), nullable=False)
    course_name = db.Column(db.String(100), nullable=False)
    group_id = db.Column(db.Integer, nullable=True)  # Grouping courses

    def to_dict(self):
        return {"id": self.id, "course_number": self.course_number, "course_id": self.course_id, "course_name": self.course_name, "group_id": self.group_id}

# Ensure tables are created
with app.app_context():
    db.create_all()

# User Registration Route
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')

    if not email or not password or not name:
        return jsonify({"error": "Missing required fields"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already exists"}), 400

    hashed_password = generate_password_hash(password)
    new_user = User(email=email, password_hash=hashed_password, name=name)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

# User Login Route
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password_hash, password):
        return jsonify({"error": "Invalid email or password"}), 401

    session['user_id'] = user.id
    return jsonify({"message": "Login successful", "user": user.to_dict()}), 200

# User Profile Route
@app.route('/profile', methods=['GET'])
def profile():
    if 'user_id' not in session:
        return jsonify({"error": "Unauthorized"}), 401

    user = User.query.get(session['user_id'])
    return jsonify(user.to_dict()), 200

# Logout Route
@app.route('/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)
    return jsonify({"message": "Logged out successfully"}), 200

# Get all courses
@app.route('/api/courses', methods=['GET'])
def get_courses():
    courses = Course.query.all()
    return jsonify([course.to_dict() for course in courses])

# Add a new course
@app.route('/add', methods=['POST'])
def add_course():
    data = request.form
    course_number = data.get('course_number')
    course_id = data.get('course_id')
    course_name = data.get('course_name')

    existing_course = Course.query.filter_by(course_id=course_id).first()
    group_id = existing_course.id if existing_course else None

    new_course = Course(course_number=course_number, course_id=course_id, course_name=course_name, group_id=group_id)
    db.session.add(new_course)
    db.session.commit()

    return redirect('/')

# Delete a course
@app.route('/courses/<int:id>', methods=['DELETE'])
def delete_course(id):
    course = Course.query.get(id)
    if course:
        db.session.delete(course)
        db.session.commit()
        return jsonify({"message": "Course deleted"}), 200
    return jsonify({"error": "Course not found"}), 404


genai.configure(api_key=os.environ.get('API_KEY'))
@app.route("/generate", methods=["POST"])
def generate_response():
    data = request.get_json()
    user_text = data.get("text")

    model = genai.GenerativeModel("gemini-2.0-flash")
    response = model.generate_content(user_text)

    return jsonify({"response": response.text})

# Dummy page to view courses added to DB

@app.route('/')
def index():
    courses = Course.query.all()
    grouped_courses = {}

    for course in courses:
        if course.course_id not in grouped_courses:
            grouped_courses[course.course_id] = []
        grouped_courses[course.course_id].append(course)

    return render_template('index.html', grouped_courses=grouped_courses)

if __name__ == "__main__":
    app.run(debug=True)