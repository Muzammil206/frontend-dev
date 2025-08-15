
import Nav from "../Component/Nav"
import Footer from "../Component/Footer"
import CartItem from "../Component/cart-item"
import CartSummary from "../Component/cart-summary"
import RelatedCoursesSection from "../Component/related-courses-section"
import { useCart } from "../context/cart-context"
import { useAuth } from "../context/auth-context"

// Dummy data for related courses
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
  const { cartItems, removeFromCart, loading, clearCart } = useCart()
  const { user } = useAuth()

  const handleRemoveItem = (id) => {
    removeFromCart(id)
  }

  const handleApplyCoupon = (code) => {
    // This is handled in CartSummary component now
    console.log("Coupon applied:", code)
  }

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      clearCart()
    }
  }

  if (!user || user.name === "Guest") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Nav />
        <main className="pt-28 pb-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-dm-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Shopping Cart
            </h1>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-12">
              <div className="text-gray-400 text-6xl mb-4">
                <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Please login to view your cart</h3>
              <p className="text-gray-600 mb-6">You need to be logged in to add items to cart and make purchases.</p>
              <a
                href="/login"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Login Now
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="pt-28 pb-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h1 className="font-dm-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Shopping cart</h1>
            {cartItems.length > 0 && (
              <button
                onClick={handleClearCart}
                className="text-red-600 hover:text-red-700 font-dm-sans text-sm font-medium underline"
                disabled={loading}
              >
                Clear Cart
              </button>
            )}
          </div>

          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
              <p className="font-dm-sans text-gray-600 mt-2">Loading cart...</p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.length > 0 ? (
                <>
                  <div className="text-sm text-gray-600 mb-4">
                    {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your cart
                  </div>
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} onRemove={handleRemoveItem} />
                  ))}
                </>
              ) : (
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
                  <div className="text-gray-400 text-6xl mb-4">
                    <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-600 mb-6">Browse our courses and add some to your cart!</p>
                  <a
                    href="/courses"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Browse Courses
                  </a>
                </div>
              )}
            </div>

            {/* Right Column: Cart Summary */}
            <div className="lg:col-span-1">
              <CartSummary onApplyCoupon={handleApplyCoupon} />
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
