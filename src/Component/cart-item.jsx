import { Star, XCircle } from "lucide-react"
import { useCart } from "../context/cart-context"

const CartItem = ({ item, onRemove }) => {
  const { loading } = useCart()

  const handleRemove = () => {
    if (onRemove) {
      onRemove(item.id)
    }
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      {/* Remove Button */}
      <button
        onClick={handleRemove}
        disabled={loading}
        className="text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
      >
        <XCircle className="w-6 h-6" />
      </button>

      {/* Radio Button (or Checkbox) */}
      <input type="radio" name="selected-course" className="form-radio h-5 w-5 text-blue-600" />

      {/* Course Image */}
      <img
        src={item.image || "/placeholder.svg?height=80&width=80&query=course+thumbnail"}
        alt={item.title}
        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
      />

      {/* Course Details */}
      <div className="flex-1">
        <h3 className="font-dm-sans text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
        <div className="flex items-center gap-1 text-yellow-500 mb-1">
          <Star className="h-4 w-4 fill-current" />
          <span className="font-dm-sans text-sm font-medium text-gray-700">
            {item.rating} ({item.reviews} Review{item.reviews !== "1" ? "s" : ""})
          </span>
        </div>
        <p className="font-dm-sans text-sm text-gray-600">
          Course by: <span className="font-medium">{item.instructor}</span>
        </p>
      </div>

      {/* Price */}
      <div className="flex flex-col items-end">
        <span className="font-dm-sans text-lg font-bold text-gray-900">N {item.price?.toLocaleString()}</span>
        {item.oldPrice && (
          <span className="font-dm-sans text-sm text-gray-500 line-through">N {item.oldPrice?.toLocaleString()}</span>
        )}
      </div>
    </div>
  )
}

export default CartItem
