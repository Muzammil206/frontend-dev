import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/login/Login";
import Register from "./Pages/Register";
import "font-awesome/css/font-awesome.min.css";
import AboutPage from "./Pages/AboutPage";
import ScrollToTop from "./Utilities/ScrollToTop";
import CourseDetailsPage from "./Pages/course-details-page";
import StudentDashboard from "./Pages/StudentDashboard";
import Programs from "./Pages/Programs";
import ContactUSPage from "./Pages/ContactUSPage";
import Forgetpassword from "./Pages/Forgetpassword";
import CoursesPage from "./Pages/CoursesPage";
import Resources from "./Pages/resources/Resources";
import Eachresourcesdetails from "./Pages/resources/Eachresourcesdetails";
import Events from "./Pages/events/Events";
import CartPage from "./Pages/cart-page";
import MyCoursesPage from "./Pages/my-courses-page";
import StudyPage from "./Pages/study-page";
import { AuthProvider } from "./context/auth-context";
function App() {
  return (
    <div className="">
      <Router>
        <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
         <Route path="/courses/:id" element={<CourseDetailsPage />} /> 
           <Route path="/cart" element={<CartPage />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/my-courses" element={<MyCoursesPage />} />
          <Route path="/study/:courseId" element={<StudyPage />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:id" element={<Eachresourcesdetails />} />
          <Route path="/contact-us" element={<ContactUSPage />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
