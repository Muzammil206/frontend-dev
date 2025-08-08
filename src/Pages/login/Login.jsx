

import { useState } from "react"
import { useAuth } from "../../context/auth-context" // Corrected path
import { Link, useNavigate } from "react-router-dom"
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"
import { toast } from "react-hot-toast"
import { Twitter } from "lucide-react"

const Login = () => {
  const navigate = useNavigate() // Initialize useNavigate for redirection
  const { login } = useAuth() // Use the login function from AuthContext
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const validateForm = () => {
    const newErrors = {}
    let isValid = true

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
      const res = await fetch("https://lms-backend-yux4.onrender.com/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })

      const data = await res.json()
      console.log("Login API response data:", data) // Keep this for debugging

      if (data.success && data.session) {
        // Ensure data.session exists
        toast.success("Login successful! Redirecting...")
        // Correctly access token and user from the nested 'session' object
        login(data.session.access_token, data.session.user)
        // Force reload to update Nav immediately
        window.location.href = "/"
      } else {
        toast.error(data.message || "Login failed. Please check your credentials.")
      }
    } catch (error) {
      console.error("Network or API error:", error)
      toast.error("An error occurred during login. Please try again.")
    } finally {
      setIsSubmitting(false) // End loading
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Titles */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
             <img src="/SVGs/logo.svg" alt="Awibi Institute Logo" />
            <div className="flex flex-col">
              <span className="font-dm-sans text-xl font-bold leading-tight text-gray-900">Awibi</span>
              <span className="font-dm-sans text-sm text-gray-600 leading-tight">Institute</span>
            </div>
          </div>
          <h2 className="font-dm-sans mt-6 text-3xl font-bold text-gray-900">Sign in</h2>
          <p className="font-dm-sans mt-2 text-sm text-gray-600">
            Welcome back to Awibi Institute, kindly input your details
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
              placeholder="Email"
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
          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
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

          <div className="flex items-center justify-end">
            <div className="text-sm">
              <Link to="/forgetpassword" className="font-dm-sans font-medium text-green-600 hover:text-green-500">
                Forget your password
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="font-dm-sans group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <div className="relative flex justify-center text-sm">
          <span className="absolute inset-x-0 top-1/2 h-px bg-gray-300 -z-10"></span>
          <span className="relative bg-gray-50 px-4 text-gray-500">OR</span>
        </div>

        <div className="space-y-3">
          <button className="font-dm-sans w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <img src="/SVGs/google.png" alt="Google logo" className="mr-2" />
            Continue with Google
          </button>
          <button className="font-dm-sans w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Twitter className="mr-2 h-5 w-5" />
            Continue with Twitter
          </button>
        </div>

        <div className="font-dm-sans text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/Register" className="font-medium text-green-600 hover:text-green-500">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
