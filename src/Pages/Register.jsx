"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"
import { toast } from "react-hot-toast" // Assuming react-hot-toast is installed
import Nav from "../Component/Nav"
import Footer from "../Component/Footer"
import Loginimg from "../assets/login.png"
import Google from "../assets/google.png"

const Register = () => {
  const navigate = useNavigate() // Initialize useNavigate for redirection

  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("") // Changed from userName to username
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role] = useState("student") // Default role, removed UI input
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const validateForm = () => {
    const newErrors = {}
    let isValid = true

    if (!username.trim()) {
      newErrors.username = "Username is required."
      isValid = false
    }

    if (!email.trim()) {
      newErrors.email = "Email address is required."
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid."
      isValid = false
    }

    if (!password.trim()) {
      newErrors.password = "Password is required."
      isValid = false
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long."
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error("Please correct the errors in the form.")
      return // Stop submission if validation fails
    }

    setIsSubmitting(true) // Start loading

    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          role: role, // 'role' is now a fixed default value
          username: username, // Using the new username state
          password: password,
        }),
      })

      const data = await res.json()
      console.log(data)

      if (data.success) {
        toast.success("Account created successfully! Redirecting to login...")
        navigate("/Login") // Redirect to login page
      } else {
        toast.error(data.message || "Registration failed. Please try again.")
      }
    } catch (error) {
      console.error("Network or API error:", error)
      toast.error("An error occurred while creating your account. Please try again.")
    } finally {
      setIsSubmitting(false) // End loading
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <section className="flex flex-grow flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Image Section - Hidden on small screens, visible on medium and up */}
        <div className="hidden md:flex md:w-1/2 lg:w-2/5 items-center justify-center p-4">
          <img
            className="max-w-full h-auto object-contain"
            src={Loginimg || "/placeholder.svg"}
            alt="Login illustration"
          />
        </div>

        {/* Form Section */}
        <div className="w-full sm:w-4/5 md:w-1/2 lg:w-3/5 bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <p className="text-2xl sm:text-3xl font-semibold text-gray-900">Welcome to Hoistlfick!</p>
            <p className="text-xl sm:text-2xl text-gray-700 mt-2">Create an account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                placeholder="Enter your username"
                className={`w-full px-4 py-2 border ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                aria-invalid={errors.username ? "true" : "false"}
                aria-describedby="username-error"
              />
              {errors.username && (
                <p id="username-error" className="text-red-500 text-sm mt-1">
                  {errors.username}
                </p>
              )}
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                placeholder="Enter your email"
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby="email-error"
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="relative">
              <label className="block text-base font-medium text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                placeholder="Enter your password"
                className={`w-full px-4 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-invalid={errors.password ? "true" : "false"}
                aria-describedby="password-error"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer top-7 text-gray-500">
                {showPassword ? (
                  <IoEyeOutline onClick={handleShowPassword} className="text-xl" />
                ) : (
                  <IoEyeOffOutline onClick={handleShowPassword} className="text-xl" />
                )}
              </span>
              {errors.password && (
                <p id="password-error" className="text-red-500 text-sm mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between w-full text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember-me" className="rounded text-blue-600 focus:ring-blue-500" />
                <label htmlFor="remember-me" className="text-gray-700">
                  Remember me
                </label>
              </div>
              <Link to="/forgetpassword" className="text-blue-600 hover:underline">
                Forget Password ?
              </Link>
            </div>

            <p className="text-sm text-gray-700">
              By continuing, you agree to our <span className="text-blue-600 font-medium">terms of service</span>.
            </p>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing up..." : "Sign up"}
            </button>
          </form>

          <div className="relative flex items-center justify-center my-6">
            <span className="absolute w-full h-[1px] bg-gray-200 -z-10"></span>
            <span className="bg-white px-4 text-sm text-gray-500">Or register with</span>
          </div>

          <div className="flex items-center justify-center">
            <button className="text-gray-700 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 py-2.5 px-6 rounded-md font-medium transition-colors duration-200">
              <img src={Google || "/placeholder.svg"} alt="Google logo" className="w-5 h-5" />
              Continue with Google
            </button>
          </div>

          <div className="text-center mt-6 text-gray-700 text-sm">
            Already have an account?{" "}
            <Link to="/Login" className="text-blue-600 hover:underline font-medium">
              Login
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Register
