import { useState } from 'react';
import Navbar from '../Navbar';
import ScheduleDisplay from './ScheduleDisplay';
import Footer from '../Footer';
import Chatbot from "./Chatbot";

type Semester = {
  name: string;
  id: string;
  courses: string[];
};

type UniversityData = {
  coursesTaken: string[];
  semesters: Semester[];
};

const universities: string[] = [
  'University of Virginia',
  'Virginia Tech',
  'George Mason University',
  'College of William & Mary',
];

const universityData: Record<string, UniversityData> = {
  'University of Virginia': {
    coursesTaken: ['ENG 111 – English Composition I', 'MATH 151 – Calculus I'],
    semesters: [
      { name: 'Fall 2024', id: 'fall-2024', courses: ['MATH 114 – Calc II'] },
      { name: 'Spring 2025', id: 'spring-2025', courses: ['CHEM 211 – General Chemistry I'] },
    ],
  },
  'Virginia Tech': {
    coursesTaken: ['ENG 111 – English Composition I', 'CPSC 150 – Intro to Programming'],
    semesters: [
      { name: 'Fall 2024', id: 'fall-2024', courses: ['CS 112 – Intro to Programming'] },
      { name: 'Spring 2025', id: 'spring-2025', courses: ['PHYS 201 – General Physics I'] },
    ],
  },
  'George Mason University': {
    coursesTaken: ['MATH 151 – Calculus I', 'MATH 151 – Calculus I', 'MATH 151 – Calculus I', 'HIST 101 – World History'],
    semesters: [
      { name: 'Fall 2024', id: 'fall-2024', courses: ['CS 112 – Intro to Programming'] },
      { name: 'Summer 2025', id: 'summer-2025', courses: [] },
    ],
  },
  'College of William & Mary': {
    coursesTaken: [],
    semesters: [
      { name: 'Fall 2024', id: 'fall-2024', courses: [] },
    ],
  },
};

const Scheduler = () => {
  const [selectedUniversity, setSelectedUniversity] = useState<string>(universities[0]);

  const handleUniversityClick = (uni: string) => {
    setSelectedUniversity(uni);
  };

  const { coursesTaken, semesters } = universityData[selectedUniversity];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Transfer Scheduler
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {universities.map((uni) => (
              <button
                key={uni}
                onClick={() => handleUniversityClick(uni)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition cursor-pointer ${
                  selectedUniversity === uni
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}
              >
                {uni}
              </button>
            ))}
          </div>

          <ScheduleDisplay
            university={selectedUniversity}
            coursesTaken={coursesTaken}
            semesters={semesters}
          />
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Scheduler Assistant</h1>
      <Chatbot />
    </div>
      <Footer />
    </>
  );
};

export default Scheduler;
