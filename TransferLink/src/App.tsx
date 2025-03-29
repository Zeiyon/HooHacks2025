import CourseList from './modules/courselist/CourseList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './modules/homepage/Homepage';
import Register from './modules/Register';
import Login from './modules/Login';
import Scheduler from './modules/scheduler/Scheduler';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/courses" element={<CourseList />} />
      <Route path="/scheduler" element={<Scheduler />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </Router>
  )
}

export default App
