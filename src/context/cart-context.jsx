
import { createContext, useContext, useState } from "react"


const CartContext = createContext(undefined)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (course) => {
    setCartItems((prevItems) => {
      // Check if the item is already in the cart
      const existingItem = prevItems.find((item) => item.id === course.id)

      if (existingItem) {
        // If it exists, you might want to update quantity or just ignore.
        // For now, let's just return the existing items to prevent duplicates.
        return prevItems
      } else {
        // Map course data to cart item structure based on new API response
        const newCartItem = {
          id: course.id,
          title: course.title,
          image: course.image || "/placeholder.svg?height=80&width=80", // Use image from course object, fallback to placeholder
          rating: course.rating || 4.5, // Use rating from course object, fallback to dummy
          reviews: course.reviews || "N/A", // Use reviews from course object, fallback to dummy
          instructor: course.instructor, // Use instructor from course object
          price: course.price,
          oldPrice: course.oldPrice !== undefined ? course.oldPrice : null, // Ensure oldPrice is null if undefined
        }
        return [...prevItems, newCartItem]
      }
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
