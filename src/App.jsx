import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import "font-awesome/css/font-awesome.min.css";
import AboutPage from "./Pages/AboutPage";
import ScrollToTop from "./Utilities/ScrollToTop";
import Course_details from "./Pages/Course_details";
function App() {
  return (
    <div className="">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/course_details" element={<Course_details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
