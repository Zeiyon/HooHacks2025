const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-blue-600">
              CourseLink
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Course List
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Universities
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Sign In
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
