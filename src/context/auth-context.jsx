

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true) // Re-enable loading state for initial session storage read

  useEffect(() => {
    let storedUser = null
    let storedToken = null

    try {
      storedUser = sessionStorage.getItem("user")
      storedToken = sessionStorage.getItem("token")

      console.log("AuthContext: Initial read from sessionStorage - storedUser:", storedUser) // Add this line
      console.log("AuthContext: Initial read from sessionStorage - storedToken:", storedToken) // Add this line

      if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
        console.log("AuthContext: User state set to:", parsedUser) // Add this line
      } else {
        sessionStorage.removeItem("user")
        setUser(null) // Ensure user is null if invalid
      }

      if (storedToken && storedToken !== "undefined" && storedToken !== "null") {
        setToken(storedToken)
        console.log("AuthContext: Token state set.") // Add this line
      } else {
        sessionStorage.removeItem("token")
        setToken(null) // Ensure token is null if invalid
      }
    } catch (e) {
      console.error("AuthContext: Error reading or parsing from sessionStorage:", e)
      sessionStorage.removeItem("user")
      sessionStorage.removeItem("token")
      setUser(null)
      setToken(null)
    } finally {
      setLoading(false)
      console.log("AuthContext: Loading finished.") // Add this line
    }
  }, [])

  const login = (newToken, userData) => {
    console.log("AuthContext: login function called with newToken:", newToken, "userData:", userData) // Add this line
    // Ensure newToken is a valid string before storing
    if (typeof newToken === "string" && newToken) {
      setToken(newToken)
      sessionStorage.setItem("token", newToken)
    } else {
      console.warn("AuthContext: Attempted to store invalid token:", newToken)
      sessionStorage.removeItem("token")
      setToken(null)
    }

    // Ensure userData is a non-null object before stringifying and storing
    if (typeof userData === "object" && userData !== null) {
      setUser(userData)
      sessionStorage.setItem("user", JSON.stringify(userData))
    } else {
      console.warn("AuthContext: Attempted to store invalid user data:", userData)
      sessionStorage.removeItem("user")
      setUser(null)
    }
  }

  const logout = () => {
    setToken(null)
    setUser(null)
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("user")
  }

  // Provide a default user object if user is null, to prevent errors in Nav
  const currentUser = user || { name: "Guest" }

  return (
    <AuthContext.Provider value={{ user: currentUser, token, login, logout, loading }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
