import CourseList from './modules/courselist/CourseList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './modules/Navbar'
import Homepage from './modules/homepage/Homepage';
import Register from './modules/Register';
import Login from './modules/Login';
import Profile from './modules/Profile';


function App() {

  interface MyProfile {
    id: number,
    user: string,
    password: string,
    completedClasses: string[],
    currentUniversity: string,
    major: string,
  }

  const userProfile: MyProfile = {
    id: 1,
    user: 'John Doe',
    password: 'password123', // Storing passwords like this is insecure; avoid in real apps.
    completedClasses: ['Math', 'Science', 'History'],
    currentUniversity: 'Harvard University',
    major: "Computer Science"
  };

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/courses" element={<CourseList />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element ={<Profile profile = {userProfile} />} />
    </Routes>
    </Router>
  )
}

export default App
