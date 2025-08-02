

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast" // Assuming react-hot-toast is installed

const Forgetpassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null) // Clear previous errors

    if (!email.trim()) {
      setError("Email address is required.")
      toast.error("Please enter your email address.")
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email address is invalid.")
      toast.error("Please enter a valid email address.")
      return
    }

    setIsSubmitting(true)
    try {
      // Simulate API call
      const res = await fetch("https://lms-backend-yux4.onrender.com/api/v1/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        toast.success(data.message || "Password reset link sent to your email!")
        // Optionally navigate to a success page or back to login
        navigate("/Login")
      } else {
        setError(data.message || "Failed to send reset link. Please try again.")
        toast.error(data.message || "Failed to send reset link.")
      }
    } catch (err) {
      console.error("Network or API error:", err)
      setError("An error occurred. Please try again later.")
      toast.error("An error occurred. Please try again later.")
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
            <img src="/SVGs/logo.svg" alt="Awibi Institute Logo" />
            <div className="flex flex-col">
              <span className="font-dm-sans text-xl font-bold leading-tight text-gray-900">Awibi</span>
              <span className="font-dm-sans text-sm text-gray-600 leading-tight">Institute</span>
            </div>
          </div>
          <h2 className="font-dm-sans mt-6 text-3xl font-bold text-gray-900">Forgot Password?</h2>
          <p className="font-dm-sans mt-2 text-sm text-gray-600">
            Enter your email address to get the password reset link.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email Address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={`font-dm-sans appearance-none relative block w-full px-3 py-2 border ${
                error ? "border-red-500" : "border-gray-300"
              } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={error ? "true" : "false"}
              aria-describedby="email-error"
            />
            {error && (
              <p id="email-error" className="text-red-500 text-xs mt-1 text-left">
                {error}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="font-dm-sans group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending link..." : "Password Reset"}
            </button>
          </div>

          <div className="font-dm-sans text-center text-sm text-gray-600">
            <Link to="/Login" className="font-medium text-green-600 hover:text-green-500">
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Forgetpassword
