

import { useState } from "react"


const CartSummary = ({ subtotal, couponDiscount, taxes, total, onApplyCoupon }) => {
  const [couponCode, setCouponCode] = useState("")

  const handleApply = () => {
    if (onApplyCoupon) {
      onApplyCoupon(couponCode)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-28">
      <h3 className="font-dm-sans text-xl font-bold text-gray-900 mb-4">Order Summary</h3>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-dm-sans text-sm text-gray-600">Subtotal</span>
          <span className="font-dm-sans text-sm font-medium text-gray-900">N {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-dm-sans text-sm text-gray-600">Coupon Discount</span>
          <span className="font-dm-sans text-sm font-medium text-red-500">-{couponDiscount}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-dm-sans text-sm text-gray-600">Taxes</span>
          <span className="font-dm-sans text-sm font-medium text-gray-900">${taxes.toFixed(2)} USD</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-gray-200">
          <span className="font-dm-sans text-lg font-bold text-gray-900">Total:</span>
          <span className="font-dm-sans text-lg font-bold text-gray-900">N {total.toLocaleString()}</span>
        </div>
      </div>

      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors mb-6">
        Complete Payment
      </button>

      <div>
        <h4 className="font-dm-sans text-base font-bold text-gray-900 mb-3">Apply coupon code</h4>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
          />
          <button
            onClick={handleApply}
            className="bg-[#050829] hover:bg-[#1a2332] text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartSummary
