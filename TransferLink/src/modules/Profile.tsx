import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


export interface Profile {
  id: number;
  user: string;
  completedClasses: string[];
  currentUniversity: string;
  major: string;
}

interface ProfileProps {
  profile: Profile;
}

const ProfilePage: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Your Profile
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Manage your academic journey and track your completed courses.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Profile Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">User Information</h3>
              <p className="text-gray-600"><strong>Username:</strong> {profile.user}</p>
              <p className="text-gray-600"><strong>University:</strong> {profile.currentUniversity}</p>
              <p className="text-gray-600"><strong>Major:</strong> {profile.major}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Completed Classes</h3>
              {profile.completedClasses.length > 0 ? (
                <ul className="text-l text-gray-700">
                  {profile.completedClasses.map((course, index) => (
                    <li key={index} className="mb-1">✅ {course}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No completed classes listed.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Update Your Profile</h2>
        <p className="mb-6 text-lg">Keep your profile up-to-date to track your academic progress.</p>
        <Link to="/edit-profile">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-100 transition">
            Edit Profile
          </button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default ProfilePage;
