import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
// import Login from "./Pages/login/Login";
import Login from "./Pages/login/Login";
import Register from "./Pages/Register";
import "font-awesome/css/font-awesome.min.css";
import AboutPage from "./Pages/AboutPage";
import ScrollToTop from "./Utilities/ScrollToTop";
import Course_details from "./Pages/Course_details";
import StudentDashboard from "./Pages/StudentDashboard";
import SolutionPage from "./Pages/SolutionPage";
import ContactUSPage from "./Pages/ContactUSPage";
function App() {
  return (
    <div className="">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/course_details" element={<Course_details />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/solutions" element={<SolutionPage />} />
          <Route path="/contact-us" element={<ContactUSPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
