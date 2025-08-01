import { useState } from "react"
import { Link } from "react-router-dom"

const Nav = () => {
  const [hamBurger, setHamBurger] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-[#050829] rounded-2xl px-6 lg:px-8 py-4 flex justify-between items-center shadow-lg backdrop-blur-sm border border-white/10">
        {/* Logo */}
        <div className="logo flex items-center gap-2 font-bold text-white">
          <div className="flex items-center gap-2">
             <div className="logo flex items-center gap-2 font-bold">
          <img className="" src="/SVGs/logo.svg" alt="" />
           </div>
              <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight">Awibi</span>
              <span className="text-xs text-gray-300 leading-tight">Institute</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-[40px] w-[482px] h-[21px]" style={{fontFamily: 'DM Sans'}}> 
          <Link to="/" className="text-white hover:text-green-400 transition-colors text-sm font-medium leading-[21px] opacity-100">
            Home
          </Link>
          <Link to="/courses" className="text-white hover:text-green-400 transition-colors text-sm font-medium leading-[21px] opacity-100">
            Courses
          </Link>
          <Link to="/programs" className="text-white hover:text-green-400 transition-colors text-sm font-medium leading-[21px] opacity-100">
            Programs
          </Link>
          <Link to="/resources" className="text-white hover:text-green-400 transition-colors text-sm font-medium leading-[21px] opacity-100">
            Resources
          </Link>
          <Link to="/contact-us" className="text-white hover:text-green-400 transition-colors text-sm font-medium leading-[21px] opacity-100">
            Contact us
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/login" className="text-white hover:text-green-400 transition-colors px-4 py-2">
            Login
          </Link>
          <Link
            to="/register"
            className="border border-white/30 hover:border-green-400 text-white hover:text-green-400 px-6 py-2 rounded-full transition-all duration-200"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setHamBurger(!hamBurger)} className="lg:hidden flex flex-col gap-1 p-2">
          <div className={`w-6 h-0.5 bg-white transition-all ${hamBurger ? "rotate-45 translate-y-1.5" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${hamBurger ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${hamBurger ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 mt-2 bg-[#050829] rounded-2xl shadow-lg border border-white/10 transition-all duration-300 ${
          hamBurger ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="p-6 space-y-4">
          <Link
            onClick={() => setHamBurger(false)}
            to="/"
            className="block text-white hover:text-green-400 transition-colors py-2"
          >
            Home
          </Link>
          <Link
            onClick={() => setHamBurger(false)}
            to="/courses"
            className="block text-white hover:text-green-400 transition-colors py-2"
          >
            Courses
          </Link>
          <Link
            onClick={() => setHamBurger(false)}
            to="/programs"
            className="block text-white hover:text-green-400 transition-colors py-2"
          >
            Programs
          </Link>
          <Link
            onClick={() => setHamBurger(false)}
            to="/resources"
            className="block text-white hover:text-green-400 transition-colors py-2"
          >
            Resources
          </Link>
          <Link
            onClick={() => setHamBurger(false)}
            to="/contact-us"
            className="block text-white hover:text-green-400 transition-colors py-2"
          >
            Contact us
          </Link>
          <div className="pt-4 border-t border-white/10 space-y-3">
            <Link
              onClick={() => setHamBurger(false)}
              to="/login"
              className="block text-white hover:text-green-400 transition-colors py-2"
            >
              Login
            </Link>
            <Link
              onClick={() => setHamBurger(false)}
              to="/register"
              className="block border border-white/30 hover:border-green-400 text-white hover:text-green-400 px-6 py-2 rounded-full transition-all duration-200 text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        onClick={() => setHamBurger(false)}
        className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 transition-opacity duration-300 ${
          hamBurger ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </nav>
  )
}

export default Nav