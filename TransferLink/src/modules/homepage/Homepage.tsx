import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Homepage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Seamless University Transfer Planning
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Find out how your courses transfer between colleges and universities. Save time, avoid surprises, and stay on track with your degree.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/courses">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Explore Courses
              </button>
            </Link>
            <Link to="/register">
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="text-blue-600 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Search Courses</h3>
              <p className="text-gray-600">Easily search for your course and see how it transfers to other institutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="text-blue-600 text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2">Compare Equivalencies</h3>
              <p className="text-gray-600">View side-by-side course equivalencies between schools.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="text-blue-600 text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2">Plan Your Degree</h3>
              <p className="text-gray-600">Make informed decisions and stay on track to graduate on time.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6 text-lg">Create an account and start planning your transfer journey today.</p>
        <Link to="/register">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-100 transition">
            Sign Up Free
          </button>
        </Link>
      </section>

    <Footer />
    </div>
  );
};

export default Homepage;
