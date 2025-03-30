import CourseList from './modules/courselist/CourseList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './modules/Navbar'
import Homepage from './modules/homepage/Homepage';
import Register from './modules/Register';
import Login from './modules/Login';
import Courses from './modules/courselist/Courses';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/courses" element={<CourseList />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/realcourses" element={<Courses />} />
    </Routes>
    </Router>
  )
}

export default App
