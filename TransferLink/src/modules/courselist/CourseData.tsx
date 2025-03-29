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
  
 export const mockCourses: Course[] = [
    // Christopher Newport University
    {
      id: 1,
      source: {
        university: 'Christopher Newport University',
        school: '',
        courseNumber: 'CPSC 150/L',
        mnemonic: 'CPSC',
        courseName: 'Intro to Programming',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'CS 1110',
        mnemonic: 'CS',
        courseName: 'Introduction to Programming',
      },
    },
    {
      id: 2,
      source: {
        university: 'Christopher Newport University',
        school: '',
        courseNumber: 'PHYS 201',
        mnemonic: 'PHYS',
        courseName: 'General Physics I',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'PHYS 1425',
        mnemonic: 'PHYS',
        courseName: 'General Physics I',
      },
    },
    {
      id: 3,
      source: {
        university: 'Christopher Newport University',
        school: '',
        courseNumber: 'PHYS 201L',
        mnemonic: 'PHYS',
        courseName: 'General Physics I Lab',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'PHYS 1429',
        mnemonic: 'PHYS',
        courseName: 'General Physics I Lab',
      },
    },
    {
      id: 4,
      source: {
        university: 'Christopher Newport University',
        school: '',
        courseNumber: 'PHYS 202',
        mnemonic: 'PHYS',
        courseName: 'General Physics II',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'PHYS 2415',
        mnemonic: 'PHYS',
        courseName: 'General Physics II',
      },
    },
    {
      id: 5,
      source: {
        university: 'Christopher Newport University',
        school: '',
        courseNumber: 'PHYS 202L',
        mnemonic: 'PHYS',
        courseName: 'General Physics II Lab',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'PHYS 2419',
        mnemonic: 'PHYS',
        courseName: 'General Physics II Lab',
      },
    },
  
    // College of William & Mary
    {
      id: 6,
      source: {
        university: 'College of William & Mary',
        school: '',
        courseNumber: 'MATH 112',
        mnemonic: 'MATH',
        courseName: 'Calculus II',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'APMA 1110',
        mnemonic: 'APMA',
        courseName: 'Calculus II',
      },
    },
    {
      id: 7,
      source: {
        university: 'College of William & Mary',
        school: '',
        courseNumber: 'MATH 213',
        mnemonic: 'MATH',
        courseName: 'Multivariable Calculus for Sci',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'APMA 2120',
        mnemonic: 'APMA',
        courseName: 'Multivariable Calculus',
      },
    },
  
    // George Mason University
    {
      id: 8,
      source: {
        university: 'George Mason University',
        school: '',
        courseNumber: 'BIOL 103',
        mnemonic: 'BIOL',
        courseName: 'Introductory Biology',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'BIOL 2100',
        mnemonic: 'BIOL',
        courseName: 'Introductory Biology',
      },
    },
    {
      id: 9,
      source: {
        university: 'George Mason University',
        school: '',
        courseNumber: 'CHEM 211',
        mnemonic: 'CHEM',
        courseName: 'General Chemistry I',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'CHEM 1410',
        mnemonic: 'CHEM',
        courseName: 'General Chemistry I',
      },
    },
    {
      id: 10,
      source: {
        university: 'George Mason University',
        school: '',
        courseNumber: 'CHEM 213',
        mnemonic: 'CHEM',
        courseName: 'General Chemistry I Lab',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'CHEM 1411',
        mnemonic: 'CHEM',
        courseName: 'General Chemistry I Lab',
      },
    },
    {
      id: 11,
      source: {
        university: 'George Mason University',
        school: '',
        courseNumber: 'CHEM 212',
        mnemonic: 'CHEM',
        courseName: 'General Chemistry II',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'CHEM 1420',
        mnemonic: 'CHEM',
        courseName: 'General Chemistry II',
      },
    },
    {
      id: 12,
      source: {
        university: 'George Mason University',
        school: '',
        courseNumber: 'CHEM 214',
        mnemonic: 'CHEM',
        courseName: 'General Chemistry II Lab',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'CHEM 1421',
        mnemonic: 'CHEM',
        courseName: 'General Chemistry II Lab',
      },
    },
    {
      id: 13,
      source: {
        university: 'George Mason University',
        school: '',
        courseNumber: 'CS 112',
        mnemonic: 'CS',
        courseName: 'Intro to Computer Programming',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'CS 1110',
        mnemonic: 'CS',
        courseName: 'Introduction to Programming',
      },
    },
    {
      id: 14,
      source: {
        university: 'George Mason University',
        school: '',
        courseNumber: 'CS 450',
        mnemonic: 'CS',
        courseName: 'Database Concepts',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'CS 4750',
        mnemonic: 'CS',
        courseName: 'Database Systems',
      },
    },
    {
      id: 15,
      source: {
        university: 'George Mason University',
        school: '',
        courseNumber: 'MATH 114',
        mnemonic: 'MATH',
        courseName: 'Analytic Geo & Calc II',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'APMA 1110',
        mnemonic: 'APMA',
        courseName: 'Calculus II',
      },
    },
    {
      id: 16,
      source: {
        university: 'George Mason University',
        school: '',
        courseNumber: 'MATH 203',
        mnemonic: 'MATH',
        courseName: 'Linear Algebra',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'APMA 3080',
        mnemonic: 'APMA',
        courseName: 'Linear Algebra',
      },
    },
    {
      id: 17,
      source: {
        university: 'George Mason University',
        school: '',
        courseNumber: 'MATH 351',
        mnemonic: 'MATH',
        courseName: 'Probability',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'APMA 3100',
        mnemonic: 'APMA',
        courseName: 'Probability',
      },
    },
    {
      id: 18,
      source: {
        university: 'George Mason University',
        school: '',
        courseNumber: 'PHYS 160',
        mnemonic: 'PHYS',
        courseName: 'University Physics I',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'PHYS 1425',
        mnemonic: 'PHYS',
        courseName: 'General Physics I',
      },
    },
    {
      id: 19,
      source: {
        university: 'George Mason University',
        school: '',
        courseNumber: 'PHYS 161',
        mnemonic: 'PHYS',
        courseName: 'University Physics I Lab',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'PHYS 1429',
        mnemonic: 'PHYS',
        courseName: 'General Physics I Lab',
      },
    },
    {
      id: 20,
      source: {
        university: 'George Mason University',
        school: '',
        courseNumber: 'SYST 101',
        mnemonic: 'SYST',
        courseName: 'Understanding Systems Engr',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'SYS 2001',
        mnemonic: 'SYS',
        courseName: 'Systems Engineering Overview',
      },
    },
    {
      id: 21,
      source: {
        university: 'George Mason University',
        school: '',
        courseNumber: 'SYST 335',
        mnemonic: 'SYST',
        courseName: 'Discrete Sys Modeling & Simulation',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'SYS 3062',
        mnemonic: 'SYS',
        courseName: 'Discrete Event Simulation',
      },
    },
  
    // James Madison University
    {
      id: 22,
      source: {
        university: 'James Madison University',
        school: '',
        courseNumber: 'MATH 236',
        mnemonic: 'MATH',
        courseName: 'Calculus II',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'APMA 1110',
        mnemonic: 'APMA',
        courseName: 'Calculus II',
      },
    },
    {
      id: 23,
      source: {
        university: 'James Madison University',
        school: '',
        courseNumber: 'MATH 237',
        mnemonic: 'MATH',
        courseName: 'Calculus III',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'APMA 2120',
        mnemonic: 'APMA',
        courseName: 'Multivariable Calculus',
      },
    },
  
    // Old Dominion University
    {
      id: 24,
      source: {
        university: 'Old Dominion University',
        school: '',
        courseNumber: 'CHEM 121N',
        mnemonic: 'CHEM',
        courseName: 'Found. Of Chemistry I',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'CHEM 1410',
        mnemonic: 'CHEM',
        courseName: 'General Chemistry I',
      },
    },
    {
      id: 25,
      source: {
        university: 'Old Dominion University',
        school: '',
        courseNumber: 'CHEM 122N',
        mnemonic: 'CHEM',
        courseName: 'Found. Of Chemistry I Lab',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'CHEM 1411',
        mnemonic: 'CHEM',
        courseName: 'General Chemistry I Lab',
      },
    },
    {
      id: 26,
      source: {
        university: 'Old Dominion University',
        school: '',
        courseNumber: 'CHEM 123N',
        mnemonic: 'CHEM',
        courseName: 'Found. Of Chemistry II',
      },
      destination: {
        university: 'University of Virginia',
        school: '',
        courseNumber: 'CHEM 1420',
        mnemonic: 'CHEM',
        courseName: 'General Chemistry II',
      },
    },
  ];
  
  