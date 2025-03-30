import React, { useEffect, useState } from 'react';

export interface Course {
    id: number;
    course_number: string;
    course_id: string;
    course_name: string;
    group_id: number | null; // Nullable field
}

const Courses: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    // Fetch courses from the Flask API
    useEffect(() => {
        fetch('http://localhost:5000/api/courses')
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // First get the raw text
          })
          .then((data: Course[]) => {
            setCourses(data); // Update state with fetched courses
          });
      }, []); // Empty dependency array ensures this only runs once on mount

    return (
        <div>
            <h1>Courses</h1>
            {courses.length > 0 ? (
                <ul>
                    {courses.map((course) => (
                        <li key={course.id}>
                            {course.course_number} - {course.course_name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading courses...</p>
            )}
        </div>
    );
}

export default Courses;