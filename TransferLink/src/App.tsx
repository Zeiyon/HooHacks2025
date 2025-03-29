import CourseList from './modules/courselist/CourseList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './modules/Navbar'
import Homepage from './modules/homepage/Homepage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<CourseList />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  )
}

export default App
