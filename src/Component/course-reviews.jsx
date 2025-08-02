import { Star, ThumbsUp, ThumbsDown } from "lucide-react"

const CourseReviews = ({ rating, totalReviews, breakdown, reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="font-dm-sans text-2xl font-bold text-gray-900 mb-6">Reviews</h3>

      {/* Overall Rating and Breakdown */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="font-dm-sans text-5xl font-bold text-gray-900">{rating.toFixed(1)}</div>
          <div className="flex flex-col">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-6 h-6 ${i < Math.floor(rating) ? "fill-current" : ""}`} />
              ))}
            </div>
            <p className="font-dm-sans text-sm text-gray-600">{totalReviews} reviews</p>
          </div>
        </div>

        {/* Rating Breakdown Bars */}
        <div className="space-y-2">
          {breakdown.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="font-dm-sans text-sm text-gray-700 w-12 text-right">{item.stars}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-400 h-full rounded-full" style={{ width: `${item.percentage}%` }}></div>
              </div>
              <span className="font-dm-sans text-sm text-gray-600 w-10 text-left">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-dm-sans text-lg font-bold text-gray-900">{review.author}</h4>
              <span className="font-dm-sans text-sm text-gray-500">{review.timeAgo}</span>
            </div>
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < review.stars ? "fill-current" : ""}`} />
              ))}
            </div>
            <p className="font-dm-sans text-base text-gray-700 mb-4">{review.comment}</p>
            <div className="flex items-center gap-4 text-gray-500">
              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span className="font-dm-sans text-sm">{review.likes}</span>
              </button>
              <button className="flex items-center gap-1 hover:text-red-600 transition-colors">
                <ThumbsDown className="w-4 h-4" />
                <span className="font-dm-sans text-sm">{review.dislikes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseReviews
