

import { useState } from "react"
import Nav from "../Component/Nav"
import Footer from "../Component/Footer"
import CartItem from "../Component/cart-item";
import CartSummary from "../Component/cart-summary";
import RelatedCoursesSection from "../Component/related-courses-section";
import { useCart } from "../context/cart-context" // Import useCart hook

// Dummy data for related courses (reusing structure from CourseDetailPage)
const allCourses = [
  {
    id: "personal-growth-1",
    name: "Personal Development",
    overlayTitle: "Personal Growth",
    courseTitle: "The Science of Well-Being",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    level: "Intermediate",
    time: "6 months",
    price: "N 12,000",
    oldPrice: null,
    enrolledCount: 234,
    previewImage: "/placeholder.svg?height=200&width=300",
    instructor: "Jane Doe",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4.7,
  },
  {
    id: "personal-growth-2",
    name: "Personal Development",
    overlayTitle: "Personal Growth",
    courseTitle: "The Science of Well-Being",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    level: "Intermediate",
    time: "6 months",
    price: "N 12,000",
    oldPrice: null,
    enrolledCount: 234,
    previewImage: "/placeholder.svg?height=200&width=300",
    instructor: "Jane Doe",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4.7,
  },
  {
    id: "personal-growth-3",
    name: "Personal Development",
    overlayTitle: "Personal Growth",
    courseTitle: "The Science of Well-Being",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    level: "Intermediate",
    time: "6 months",
    price: "N 12,000",
    oldPrice: null,
    enrolledCount: 234,
    previewImage: "/placeholder.svg?height=200&width=300",
    instructor: "Jane Doe",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4.7,
  },
  {
    id: "personal-growth-4",
    name: "Personal Development",
    overlayTitle: "Personal Growth",
    courseTitle: "The Science of Well-Being",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    level: "Intermediate",
    time: "6 months",
    price: "N 12,000",
    oldPrice: null,
    enrolledCount: 234,
    previewImage: "/placeholder.svg?height=200&width=300",
    instructor: "Jane Doe",
    avatar: "/placeholder.svg?height=32&width=32",
    rating: 4.7,
  },
]

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart() // Get cartItems and removeFromCart from context
  const [couponDiscount, setCouponDiscount] = useState(0) // Percentage

  const handleRemoveItem = (id) => {
    removeFromCart(id)
  }

  const handleApplyCoupon = (code) => {
    // Dummy coupon logic
    if (code === "AWIBI20") {
      setCouponDiscount(20) // 20% discount
      alert("Coupon applied successfully!")
    } else {
      setCouponDiscount(0)
      alert("Invalid coupon code.")
    }
  }

  // Calculate summary values
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const taxes = 17.99 // Fixed dummy tax
  const totalBeforeDiscount = subtotal + taxes
  const total = totalBeforeDiscount * (1 - couponDiscount / 100)

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="pt-28 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-dm-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
            Shopping cart
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.length > 0 ? (
                cartItems.map((item) => <CartItem key={item.id} item={item} onRemove={handleRemoveItem} />)
              ) : (
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center text-gray-600 font-dm-sans">
                  Your cart is empty.
                </div>
              )}
            </div>

            {/* Right Column: Cart Summary */}
            <div className="lg:col-span-1">
              <CartSummary
                subtotal={subtotal}
                couponDiscount={couponDiscount}
                taxes={taxes}
                total={total}
                onApplyCoupon={handleApplyCoupon}
              />
            </div>
          </div>
        </div>
      </main>
      <RelatedCoursesSection courses={allCourses} />
      <Footer />
    </div>
  )
}

export default CartPage
