
import { createContext, useContext, useState, useEffect } from "react"
import { supabase } from "../lib/supabase"
import { useAuth } from "./auth-context"
import { toast } from "react-hot-toast"

const CartContext = createContext(undefined)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(false)
  const { user, token } = useAuth()

  // Fetch cart items from Supabase when user logs in
  useEffect(() => {
    if (user && user.id && token) {
      fetchCartItems()
    } else {
      // Clear cart when user logs out
      setCartItems([])
    }
  }, [user, token])

  const fetchCartItems = async () => {
    if (!user?.id) return

    setLoading(true)
    try {
      const { data, error } = await supabase
        .from("cart_items")
        .select("*")
        .eq("user_id", user.id)
        .order("added_at", { ascending: false })

      if (error) {
        console.error("Error fetching cart items:", error)
        toast.error("Failed to load cart items")
        return
      }

      console.log("Fetched cart items:", data)

      // Transform Supabase data to match our cart item structure
      const transformedItems = data.map((item) => ({
        id: item.course_id, // Use course_id as the main id for compatibility
        supabaseId: item.id, // Keep Supabase ID for database operations
        title: item.course_title,
        image: item.course_image,
        rating: item.rating || 4.5,
        reviews: item.reviews || "N/A",
        instructor: item.instructor,
        price: Number.parseFloat(item.price),
        oldPrice: item.old_price ? Number.parseFloat(item.old_price) : null,
      }))

      setCartItems(transformedItems)
    } catch (error) {
      console.error("Error in fetchCartItems:", error)
      toast.error("Failed to load cart items")
    } finally {
      setLoading(false)
    }
  }

  const addToCart = async (course) => {
    if (!user?.id) {
      toast.error("Please login to add items to cart")
      return
    }

    // Check if item already exists in cart
    const existingItem = cartItems.find((item) => item.id === course.id)
    if (existingItem) {
      toast.error("Item already in cart")
      return
    }

    setLoading(true)
    try {
      const cartItem = {
        user_id: user.id,
        course_id: course.id,
        course_title: course.title,
        course_image: course.image || course.thumbnail_url || "/placeholder.svg?height=80&width=80",
        instructor: course.instructor || course.instructor_name || "Unknown Instructor",
        price: course.price,
        old_price: course.oldPrice || course.discounted_price || null,
        rating: course.rating || 4.5,
        reviews: course.reviews || "N/A",
      }

      const { data, error } = await supabase.from("cart_items").insert([cartItem]).select().single()

      if (error) {
        if (error.code === "23505") {
          // Unique constraint violation
          toast.error("Item already in cart")
          return
        }
        console.error("Error adding to cart:", error)
        toast.error("Failed to add item to cart")
        return
      }

      // Transform and add to local state
      const newCartItem = {
        id: data.course_id,
        supabaseId: data.id,
        title: data.course_title,
        image: data.course_image,
        rating: data.rating || 4.5,
        reviews: data.reviews || "N/A",
        instructor: data.instructor,
        price: Number.parseFloat(data.price),
        oldPrice: data.old_price ? Number.parseFloat(data.old_price) : null,
      }

      setCartItems((prevItems) => [newCartItem, ...prevItems])
      toast.success(`${course.title} added to cart!`)
    } catch (error) {
      console.error("Error in addToCart:", error)
      toast.error("Failed to add item to cart")
    } finally {
      setLoading(false)
    }
  }

  const removeFromCart = async (courseId) => {
    if (!user?.id) {
      toast.error("Please login to manage cart")
      return
    }

    const itemToRemove = cartItems.find((item) => item.id === courseId)
    if (!itemToRemove) {
      toast.error("Item not found in cart")
      return
    }

    setLoading(true)
    try {
      const { error } = await supabase.from("cart_items").delete().eq("user_id", user.id).eq("course_id", courseId)

      if (error) {
        console.error("Error removing from cart:", error)
        toast.error("Failed to remove item from cart")
        return
      }

      setCartItems((prevItems) => prevItems.filter((item) => item.id !== courseId))
      toast.success("Item removed from cart")
    } catch (error) {
      console.error("Error in removeFromCart:", error)
      toast.error("Failed to remove item from cart")
    } finally {
      setLoading(false)
    }
  }

  const clearCart = async () => {
    if (!user?.id) {
      toast.error("Please login to manage cart")
      return
    }

    setLoading(true)
    try {
      const { error } = await supabase.from("cart_items").delete().eq("user_id", user.id)

      if (error) {
        console.error("Error clearing cart:", error)
        toast.error("Failed to clear cart")
        return
      }

      setCartItems([])
      toast.success("Cart cleared")
    } catch (error) {
      console.error("Error in clearCart:", error)
      toast.error("Failed to clear cart")
    } finally {
      setLoading(false)
    }
  }

  const updateCartItem = async (courseId, updates) => {
    if (!user?.id) {
      toast.error("Please login to manage cart")
      return
    }

    setLoading(true)
    try {
      const { data, error } = await supabase
        .from("cart_items")
        .update(updates)
        .eq("user_id", user.id)
        .eq("course_id", courseId)
        .select()
        .single()

      if (error) {
        console.error("Error updating cart item:", error)
        toast.error("Failed to update cart item")
        return
      }

      // Update local state
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === courseId
            ? {
                ...item,
                title: data.course_title,
                image: data.course_image,
                instructor: data.instructor,
                price: Number.parseFloat(data.price),
                oldPrice: data.old_price ? Number.parseFloat(data.old_price) : null,
                rating: data.rating || 4.5,
                reviews: data.reviews || "N/A",
              }
            : item,
        ),
      )

      toast.success("Cart item updated")
    } catch (error) {
      console.error("Error in updateCartItem:", error)
      toast.error("Failed to update cart item")
    } finally {
      setLoading(false)
    }
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  }

  const getCartCount = () => {
    return cartItems.length
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartItem,
        getCartTotal,
        getCartCount,
        loading,
        fetchCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
