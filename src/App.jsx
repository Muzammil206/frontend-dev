import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
// import Login from "./Pages/login/Login";
import Login from "./Pages/login/Login";
import Register from "./Pages/Register";
import "font-awesome/css/font-awesome.min.css";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
