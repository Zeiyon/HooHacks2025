import React, { useState, useMemo } from 'react';
import CourseCard from './CourseCard';
import { mockCourses, Course } from './CourseData';

const CourseList = () => {
  const [sourceFilters, setSourceFilters] = useState({
    courseNumber: '',
    mnemonic: '',
    university: '',
    school: '',
  });

  const [destinationFilters, setDestinationFilters] = useState({
    courseNumber: '',
    mnemonic: '',
    university: '',
    school: '',
  });

  const [searchTerm, setSearchTerm] = useState('');

  const universities = [
    'Christopher Newport University',
    'College of William & Mary',
    'George Mason University',
    'James Madison University',
    'Old Dominion University',
    'University of Virginia',
  ];

  const schools = [
    'School of Science',
    'School of Arts',
    'College of Natural Sciences',
    'College of Humanities',
    'School of Engineering',
    'College of Engineering',
    'College of Arts and Sciences',
  ];

  const handleSourceFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { 
    setSourceFilters({ ...sourceFilters, [e.target.name]: e.target.value });
  };

  const handleDestinationFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDestinationFilters({ ...destinationFilters, [e.target.name]: e.target.value });
  };

  const filteredCourses = mockCourses.filter(course => {
    const combinedText = `${course.source.courseNumber} ${course.source.mnemonic} ${course.source.university} ${course.source.school} ${course.source.courseName} ${course.destination.courseNumber} ${course.destination.mnemonic} ${course.destination.university} ${course.destination.school} ${course.destination.courseName}`.toLowerCase();
    const matchesSearch = combinedText.includes(searchTerm.toLowerCase());

    const sourceMatches =
      (!sourceFilters.courseNumber ||
        course.source.courseNumber.toLowerCase().includes(sourceFilters.courseNumber.toLowerCase())) &&
      (!sourceFilters.mnemonic ||
        course.source.mnemonic.toLowerCase().includes(sourceFilters.mnemonic.toLowerCase())) &&
      (!sourceFilters.university ||
        course.source.university === sourceFilters.university) &&
      (!sourceFilters.school ||
        course.source.school === sourceFilters.school);

    const destinationMatches =
      (!destinationFilters.courseNumber ||
        course.destination.courseNumber.toLowerCase().includes(destinationFilters.courseNumber.toLowerCase())) &&
      (!destinationFilters.mnemonic ||
        course.destination.mnemonic.toLowerCase().includes(destinationFilters.mnemonic.toLowerCase())) &&
      (!destinationFilters.university ||
        course.destination.university === destinationFilters.university) &&
      (!destinationFilters.school ||
        course.destination.school === destinationFilters.school);

    return matchesSearch && sourceMatches && destinationMatches;
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
        <h1 className='flex '>CourseLink</h1>
      <input
        type="text"
        placeholder="Search courses..."
        className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-semibold mb-2">Source Course Filters</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="courseNumber"
              placeholder="Course Number"
              className="p-2 border border-gray-300 rounded-md"
              value={sourceFilters.courseNumber}
              onChange={handleSourceFilterChange}
            />
            <input
              type="text"
              name="mnemonic"
              placeholder="Mnemonic"
              className="p-2 border border-gray-300 rounded-md"
              value={sourceFilters.mnemonic}
              onChange={handleSourceFilterChange}
            />
            <select
              name="university"
              className="p-2 border border-gray-300 rounded-md"
              value={sourceFilters.university}
              onChange={handleSourceFilterChange}
            >
              <option value="">All Universities</option>
              {universities.map((uni) => (
                <option key={uni} value={uni}>
                  {uni}
                </option>
              ))}
            </select>
            <select
              name="school"
              className="p-2 border border-gray-300 rounded-md"
              value={sourceFilters.school}
              onChange={handleSourceFilterChange}
            >
              <option value="">All Schools</option>
              {schools.map((school) => (
                <option key={school} value={school}>
                  {school}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Destination Course Filters</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="courseNumber"
              placeholder="Course Number"
              className="p-2 border border-gray-300 rounded-md"
              value={destinationFilters.courseNumber}
              onChange={handleDestinationFilterChange}
            />
            <input
              type="text"
              name="mnemonic"
              placeholder="Mnemonic"
              className="p-2 border border-gray-300 rounded-md"
              value={destinationFilters.mnemonic}
              onChange={handleDestinationFilterChange}
            />
            <select
              name="university"
              className="p-2 border border-gray-300 rounded-md"
              value={destinationFilters.university}
              onChange={handleDestinationFilterChange}
            >
              <option value="">All Universities</option>
              {universities.map((uni) => (
                <option key={uni} value={uni}>
                  {uni}
                </option>
              ))}
            </select>
            <select
              name="school"
              className="p-2 border border-gray-300 rounded-md"
              value={destinationFilters.school}
              onChange={handleDestinationFilterChange}
            >
              <option value="">All Schools</option>
              {schools.map((school) => (
                <option key={school} value={school}>
                  {school}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
        {filteredCourses.length === 0 && (
          <p className="text-gray-500 text-center">No courses found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default CourseList;
