from flask import Flask, jsonify, request, render_template, redirect
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

@app.route('/api/courses', methods=['GET'])
def get_courses():
    courses = Course.query.all()
    return jsonify([course.to_dict() for course in courses])

@app.route('/add', methods=['POST'])
def add_course():
    course_number = request.form['course_number']
    course_id = request.form['course_id']
    course_name = request.form['course_name']


    existing_course = Course.query.filter_by(course_id=course_id).first()
    
    if existing_course:
        group_id = existing_course.id # Link to the first course with this id
    else:
        group_id = None # First entry of this course_id

    new_course = Course(
        course_number=course_number,
        course_id=course_id,
        course_name=course_name,
        group_id=group_id
    )

    db.session.add(new_course)
    db.session.commit()

    return redirect('/')

@app.route('/courses/<int:id>', methods=['DELETE'])
def delete_course(id):
    course = Course.query.get(id)
    if course:
        db.session.delete(course)
        db.session.commit()
        return jsonify({"message": "Course deleted"}), 200
    return jsonify({"error": "Course not found"}), 404

# Dummy page to view courses added to DB
@app.route('/')
def index():
    courses = Course.query.all()
    grouped_courses = {}
    
    # Group courses by course_id
    for course in courses:
        if course.course_id not in grouped_courses:
            grouped_courses[course.course_id] = []
        grouped_courses[course.course_id].append(course)

    return render_template('index.html', grouped_courses=grouped_courses)

if __name__ == "__main__":
    app.run(debug=True)
