

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
        // Map course data to cart item structure
        const newCartItem = {
          id: course.id,
          title: course.title,
          image: course.videoPreview, // Using videoPreview as the image for the cart item
          rating: course.reviews.overallRating,
          reviews: course.reviews.totalReviews.toLocaleString(), // Format reviews count
          instructor: course.instructor.name,
          price: course.price,
          oldPrice: course.oldPrice,
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
