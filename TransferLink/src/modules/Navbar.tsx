import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-blue-600">
              CourseLink
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-blue-600 font-medium">
              Course List
            </Link>
            <Link to="/scheduler" className="text-gray-700 hover:text-blue-600 font-medium">
              Scheduler
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/signin" className="text-gray-700 hover:text-blue-600 font-medium">
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
