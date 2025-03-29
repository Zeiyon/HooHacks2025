import React from 'react';

type Semester = {
  name: string;
  id: string;
  courses: string[];
};

interface ScheduleDisplayProps {
  university: string;
  coursesTaken: string[];
  semesters: Semester[];
}

const ScheduleDisplay: React.FC<ScheduleDisplayProps> = ({ university, coursesTaken, semesters }) => {
  return (
    <div className="mt-8">
      <div className="bg-white shadow rounded-lg p-4 mb-10">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          Courses Already Taken at {university}
        </h2>
        {coursesTaken.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {coursesTaken.map((course, index) => (
              <div
                key={index}
                className="p-3 border border-gray-200 rounded-md text-sm text-gray-700 bg-gray-50"
              >
                {course}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400">No courses taken yet.</p>
        )}

        <h2 className="text-lg font-semibold text-gray-700 mb-3 mt-10">
          Courses Remaining from {university} Requirements
        </h2>
        {coursesTaken.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {coursesTaken.map((course, index) => (
              <div
                key={index}
                className="p-3 border border-gray-200 rounded-md text-sm text-gray-700 bg-gray-50"
              >
                {course}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400">No courses taken yet.</p>
        )}


      </div>

      <div className="mb-10">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Semester Schedule</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {semesters.map((sem) => (
            <div key={sem.id} className="bg-white shadow rounded-lg p-4">
              <h3 className="text-md font-bold text-blue-600 mb-3">{sem.name}</h3>

              {sem.courses.length > 0 ? (
                <ul className="space-y-2">
                  {sem.courses.map((course, idx) => (
                    <li
                      key={idx}
                      className="p-3 border border-gray-200 rounded-md text-sm text-gray-700 bg-gray-50"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-400">No courses scheduled yet.</p>
              )}

              <button className="mt-4 w-full text-sm text-blue-600 hover:underline">
                + Add Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleDisplay;
