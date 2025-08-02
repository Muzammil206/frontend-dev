"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"
import { toast } from "react-hot-toast"
import { Chrome, Twitter } from "lucide-react" // Import Lucide icons

const Register = () => {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [fullName, setFullName] = useState("") // Renamed from username
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("") // New field
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

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required."
      isValid = false
    }

    if (!email.trim()) {
      newErrors.email = "Email address is required."
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid."
      isValid = false
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required."
      isValid = false
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number is invalid."
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
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch("https://lms-backend-yux4.onrender.com/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          role: role,
          username: fullName, // Backend might still expect 'username'
          phoneNumber: phoneNumber, // Include phone number
          password: password,
        }),
      })

      const data = await res.json()
      console.log(data)

      if (data.success) {
        toast.success("Account created successfully! Redirecting to login...")
        navigate("/Login")
      } else {
        toast.error(data.message || "Registration failed. Please try again.")
      }
    } catch (error) {
      console.error("Network or API error:", error)
      toast.error("An error occurred while creating your account. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Titles */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-dm-sans text-xl font-bold leading-tight text-gray-900">Awibi</span>
              <span className="font-dm-sans text-sm text-gray-600 leading-tight">Institute</span>
            </div>
          </div>
          <h2 className="font-dm-sans mt-6 text-3xl font-bold text-gray-900">
            Create an account{" "}
            <Link to="/Login" className="font-medium text-green-600 hover:text-green-500">
              Log in
            </Link>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="full-name" className="sr-only">
              Full name
            </label>
            <input
              id="full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              className={`font-dm-sans appearance-none relative block w-full px-3 py-2 border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm`}
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              aria-invalid={errors.fullName ? "true" : "false"}
              aria-describedby="full-name-error"
            />
            {errors.fullName && (
              <p id="full-name-error" className="text-red-500 text-xs mt-1 text-left">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={`font-dm-sans appearance-none relative block w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm`}
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby="email-error"
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-xs mt-1 text-left">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone-number" className="sr-only">
              Phone number
            </label>
            <input
              id="phone-number"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              required
              className={`font-dm-sans appearance-none relative block w-full px-3 py-2 border ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm`}
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              aria-invalid={errors.phoneNumber ? "true" : "false"}
              aria-describedby="phone-number-error"
            />
            {errors.phoneNumber && (
              <p id="phone-number-error" className="text-red-500 text-xs mt-1 text-left">
                {errors.phoneNumber}
              </p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              className={`font-dm-sans appearance-none relative block w-full px-3 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm`}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={errors.password ? "true" : "false"}
              aria-describedby="password-error"
            />
            <span
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500"
              onClick={handleShowPassword}
            >
              {showPassword ? <IoEyeOutline className="h-5 w-5" /> : <IoEyeOffOutline className="h-5 w-5" />}
            </span>
            {errors.password && (
              <p id="password-error" className="text-red-500 text-xs mt-1 text-left">
                {errors.password}
              </p>
            )}
          </div>

          <p className="font-dm-sans text-xs text-gray-600 text-center">
            By creating an account, you agree to our{" "}
            <Link to="/terms" className="font-medium text-green-600 hover:text-green-500">
              Terms of use
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="font-medium text-green-600 hover:text-green-500">
              Privacy Policy
            </Link>
            .
          </p>

          <div>
            <button
              type="submit"
              className="font-dm-sans group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing up..." : "Sign up"}
            </button>
          </div>
        </form>

        <div className="relative flex justify-center text-sm">
          <span className="absolute inset-x-0 top-1/2 h-px bg-gray-300 -z-10"></span>
          <span className="relative bg-gray-50 px-4 text-gray-500">OR</span>
        </div>

        <div className="space-y-3">
          <button className="font-dm-sans w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <img src="/SVGs/google.png" alt="" />
            Continue with Google
          </button>
          <button className="font-dm-sans w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Twitter className="mr-2 h-5 w-5" />
            Continue with Twitter
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
