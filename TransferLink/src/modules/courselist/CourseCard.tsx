import React from 'react';

export interface Course {
  id: number;
  source: {
    university: string;
    school: string;
    courseNumber: string;
    mnemonic: string;
    courseName: string;
  };
  destination: {
    university: string;
    school: string;
    courseNumber: string;
    mnemonic: string;
    courseName: string;
  };
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      <div className="flex-1 p-4 bg-white">
        <h3 className="text-lg font-semibold mb-2">From:</h3>
        <p><span className="font-medium">University:</span> {course.source.university}</p>
        <p><span className="font-medium">School:</span> {course.source.school}</p>
        <p><span className="font-medium">Course:</span> {course.source.courseNumber} - {course.source.courseName}</p>
        <p><span className="font-medium">Mnemonic:</span> {course.source.mnemonic}</p>
      </div>

      <div className="flex-1 p-4 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-300">
        <h3 className="text-lg font-semibold mb-2">Transfers To:</h3>
        <p><span className="font-medium">University:</span> {course.destination.university}</p>
        <p><span className="font-medium">School:</span> {course.destination.school}</p>
        <p><span className="font-medium">Course:</span> {course.destination.courseNumber} - {course.destination.courseName}</p>
        <p><span className="font-medium">Mnemonic:</span> {course.destination.mnemonic}</p>
      </div>
    </div>
  );
};

export default CourseCard;
