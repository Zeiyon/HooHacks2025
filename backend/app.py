from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///courses.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define Course model
class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # Unique auto-incremented ID
    course_number = db.Column(db.String(10), nullable=False, unique=True)
    course_id = db.Column(db.String(10), nullable=False)  # Shared ID for grouping
    course_name = db.Column(db.String(100), nullable=False)
    group_id = db.Column(db.Integer, nullable=True)  # Removed ForeignKey

    def to_dict(self):
        return {"id": self.id, "course_number": self.course_number, "course_id": self.course_id, "course_name": self.course_name, "group_id": self.group_id}

    def __repr__(self):
        return f'<Course {self.course_number} - {self.course_name}>'

# Ensure tables are created
with app.app_context():
    db.create_all()

@app.route('/courses', methods=['GET'])
def get_courses():
    courses = Course.query.all()
    return jsonify([course.to_dict() for course in courses])

@app.route('/courses', methods=['POST'])
def add_course():
    data = request.json
    if not all(key in data for key in ["course_number", "course_id", "course_name"]):
        return jsonify({"error": "Missing data"}), 400

    existing_course = Course.query.filter_by(course_id=data["course_id"]).first()
    group_id = existing_course.id if existing_course else None  # Link to first entry

    new_course = Course(
        course_number=data["course_number"],
        course_id=data["course_id"],
        course_name=data["course_name"],
        group_id=group_id
    )
    db.session.add(new_course)
    db.session.commit()
    return jsonify(new_course.to_dict()), 201

@app.route('/courses/<int:id>', methods=['DELETE'])
def delete_course(id):
    course = Course.query.get(id)
    if course:
        db.session.delete(course)
        db.session.commit()
        return jsonify({"message": "Course deleted"}), 200
    return jsonify({"error": "Course not found"}), 404

@app.route('/')
def home():
    return jsonify({"message": "Flask API is running!"}), 200

if __name__ == "__main__":
    app.run(debug=True)
