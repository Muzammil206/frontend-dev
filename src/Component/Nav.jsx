"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { UserCircle, ShoppingCart } from "lucide-react"
import { useAuth } from "../context/auth-context"
import { useCart } from "../context/cart-context"

const Nav = ({ bg = "#050829" }) => {
  const [hamBurger, setHamBurger] = useState(false)
  const { user, token, logout, loading } = useAuth() // Destructure 'loading' here
  const { cartItems } = useCart()

  // Add console logs for debugging in Nav
  console.log("Nav: Current user:", user)
  console.log("Nav: Current token:", token)
  console.log("Nav: AuthContext loading state:", loading)

  const handleLogout = () => {
    logout()
    window.location.href = "/"
  }

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div
        style={{ backgroundColor: bg }}
        className="rounded-2xl px-6 lg:px-8 py-4 flex justify-between items-center shadow-lg backdrop-blur-sm border border-white/10"
      >
        {/* Logo */}
        <div className="logo flex items-center gap-2 font-bold">
          <Link to="/" className="flex items-center gap-2">
            <img src="/SVGs/logo.svg" alt="Awibi Logo" className="h-10 w-10" />
            <div className="flex flex-col">
              <span className={`text-lg font-bold leading-tight ${bg === "#D7D7D7" ? "text-[#263238]" : "text-white"}`}>
                Awibi
              </span>
              <span className={`text-xs leading-tight ${bg === "#D7D7D7" ? "text-[#263238]" : "text-gray-300"}`}>
                Institute
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-[40px] w-[482px] h-[21px]" style={{ fontFamily: "DM Sans" }}>
          <Link
            to="/"
            className={`${
              bg === "#D7D7D7" ? "text-[#263238]" : "text-white"
            } hover:text-green-400 transition-colors text-sm font-medium leading-[21px] opacity-100`}
          >
            Home
          </Link>
          <Link
            to="/courses"
            className={`${
              bg === "#D7D7D7" ? "text-[#263238]" : "text-white"
            } hover:text-green-400 transition-colors text-sm font-medium leading-[21px] opacity-100`}
          >
            Courses
          </Link>
          <Link
            to="/programs"
            className={`${
              bg === "#D7D7D7" ? "text-[#263238]" : "text-white"
            } hover:text-green-400 transition-colors text-sm font-medium leading-[21px] opacity-100`}
          >
            Programs
          </Link>
          <Link
            to="/resources"
            className={`${
              bg === "#D7D7D7" ? "text-[#263238]" : "text-white"
            } hover:text-green-400 transition-colors text-sm font-medium leading-[21px] opacity-100`}
          >
            Resources
          </Link>
          <Link
            to="/contact-us"
            className={`${
              bg === "#D7D7D7" ? "text-[#263238]" : "text-white"
            } hover:text-green-400 transition-colors text-sm font-medium leading-[21px] opacity-100`}
          >
            Contact us
          </Link>
        </div>

        {/* Desktop Auth Buttons / User Profile & Cart */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Cart Icon */}
          <Link to="/cart" className="relative text-white hover:text-green-400 transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          {loading ? ( // Show loading state
            <div className="text-white">Loading...</div>
          ) : token ? ( // Check if user is logged in (token exists)
            <>
              <Link to="/dashboard" className="flex items-center gap-2 text-white hover:text-green-400 transition-colors">
                <UserCircle className="w-8 h-8" />
                <span className="font-medium">{user.name || "User"}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="border border-white/30 hover:border-red-400 text-white hover:text-red-400 px-6 py-2 rounded-full transition-all duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-green-400 transition-colors px-4 py-2">
                Login
              </Link>
              <Link
                to="/register"
                className="border border-white/30 hover:border-green-400 text-white hover:text-green-400 px-6 py-2 rounded-full transition-all duration-200"
              >
                Sign Up
              </Link>
            </>
          )}
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
            className={`block ${bg === "#D7D7D7" ? "text-[#263238]" : "text-white"} hover:text-green-400 transition-colors py-2`}
          >
            Home
          </Link>
          <Link
            onClick={() => setHamBurger(false)}
            to="/courses"
            className={`block ${bg === "#D7D7D7" ? "text-[#263238]" : "text-white"} hover:text-green-400 transition-colors py-2`}
          >
            Courses
          </Link>
          <Link
            onClick={() => setHamBurger(false)}
            to="/programs"
            className={`block ${bg === "#D7D7D7" ? "text-[#263238]" : "text-white"} hover:text-green-400 transition-colors py-2`}
          >
            Programs
          </Link>
          <Link
            onClick={() => setHamBurger(false)}
            to="/resources"
            className={`block ${bg === "#D7D7D7" ? "text-[#263238]" : "text-white"} hover:text-green-400 transition-colors py-2`}
          >
            Resources
          </Link>
          <Link
            onClick={() => setHamBurger(false)}
            to="/contact-us"
            className={`block ${bg === "#D7D7D7" ? "text-[#263238]" : "text-white"} hover:text-green-400 transition-colors py-2`}
          >
            Contact us
          </Link>
          <div className="pt-4 border-t border-white/10 space-y-3">
            {loading ? ( // Show loading state in mobile menu
              <div className="text-white">Loading...</div>
            ) : token ? (
              <>
                <Link
                  onClick={() => setHamBurger(false)}
                  to="/dashboard"
                  className="block text-white hover:text-green-400 transition-colors py-2"
                >
                  Profile ({user.name || "User"})
                </Link>
                <button
                  onClick={() => {
                    setHamBurger(false)
                    handleLogout()
                  }}
                  className="block w-full border border-white/30 hover:border-red-400 text-white hover:text-red-400 px-6 py-2 rounded-full transition-all duration-200 text-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
            {/* Cart Icon for Mobile */}
            <Link
              onClick={() => setHamBurger(false)}
              to="/cart"
              className="relative block text-white hover:text-green-400 transition-colors py-2"
            >
              Cart
              {cartItems.length > 0 && (
                <span className="absolute top-1/2 -translate-y-1/2 ml-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
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
