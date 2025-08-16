import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CheckCircle } from "lucide-react"

const RegistrationSuccess = () => {
  const navigate = useNavigate()

  // Auto redirect to dashboard after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login")
    }, 20000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <img src="/SVGs/logo.svg" alt="Awibi Institute Logo" />
          <div className="flex flex-col">
            <span className="font-dm-sans text-xl font-bold leading-tight text-gray-900">Awibi</span>
            <span className="font-dm-sans text-sm text-gray-600 leading-tight">Institute</span>
          </div>
        </div>

        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Outer decorative circle */}
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              {/* Inner white circle */}
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                {/* Success checkmark */}
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-4">
          <h1 className="font-dm-sans text-3xl font-bold text-gray-900">Account created successfully!</h1>
          <p className="font-dm-sans text-lg text-gray-600">Check your email for a verification link.</p>
        </div>

        {/* Action Button */}
        <div className="space-y-4 pt-8">
          <Link
            to="/student-dashboard"
            className="font-dm-sans w-full flex justify-center py-3 px-6 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
          >
            Go to Dashboard
          </Link>

          {/* Auto redirect notice */}
          <p className="font-dm-sans text-sm text-gray-500">
            You will be automatically redirected to your dashboard in 5 seconds...
          </p>
        </div>

        {/* Alternative Actions */}
        <div className="pt-6 border-t border-gray-200">
          <p className="font-dm-sans text-sm text-gray-600 mb-4">Or explore other options:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/courses" className="font-dm-sans text-sm text-blue-600 hover:text-blue-500 font-medium">
              Browse Courses
            </Link>
            <span className="hidden sm:inline text-gray-300">|</span>
            <Link to="/login" className="font-dm-sans text-sm text-blue-600 hover:text-blue-500 font-medium">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationSuccess
