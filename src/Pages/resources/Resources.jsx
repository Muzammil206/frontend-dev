
import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Play, Heart, Share2 } from "lucide-react"
import Nav from "../../Component/Nav"
import Footer from "../../Component/Footer"

const ResourcesPage = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Main book data
  const book = {
    id: 1,
    title: "How Innovation Works",
    author: "Matt Ridley",
    rating: 4.7,
    reviews: 234,
    price: 75,
    format: "E-copy",
    description:
      "Access a wide range of educational materials designed to enhance your learning experience. Whether you're just starting out or looking to refine your skills, we've got something for you! Access a wide range of educational materials designed to enhance your learning experience. Whether you're just starting out or looking to refine your skills, we've got something for you!",
    content: [
      "Introduction",
      "Who is Matt Ridley",
      "The Nature of Innovation",
      "Energy and Innovation",
      "Transport Innovation",
      "Communication Revolution",
      "Computing and the Internet",
      "Prehistoric Innovation",
      "Innovation in Food and Farming",
      "Medicine and Health Innovation",
    ],
    images: [
      "../resourses.png",
      "../resourses.png",
      "../resourses.png",
      "../resourses.png",
      "../resourses.png",
      "../resourses.png",
      "../resourses.png",
    ],
    videoDescription:
      "Learn about the fascinating world of innovation and how breakthrough ideas transform our world. This comprehensive guide explores the patterns and processes behind human innovation.",
  }

  // Related products data
  const relatedProducts = [
    {
      id: 2,
      title: "How Innovation Works",
      author: "Matt Ridley",
      rating: 4.7,
      price: 75,
      image: "../resourses.png",
      category: "Course reference",
      isPaid: true,
    },
    {
      id: 3,
      title: "How Innovation Works",
      author: "Matt Ridley",
      rating: 4.7,
      price: 75,
      image: "../resourses.png",
      category: "Course reference",
      isPaid: true,
    },
    {
      id: 4,
      title: "How Innovation Works",
      author: "Matt Ridley",
      rating: 4.7,
      price: 75,
      image: "../resourses.png",
      category: "Course reference",
      isPaid: true,
    },
    {
      id: 5,
      title: "How Innovation Works",
      author: "Matt Ridley",
      rating: 4.7,
      price: 75,
      image: "../resourses.png",
      category: "Course reference",
      isPaid: true,
    },
    {
      id: 6,
      title: "How Innovation Works",
      author: "Matt Ridley",
      rating: 4.7,
      price: 75,
      image: "../resourses.png",
      category: "Course reference",
      isPaid: true,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, relatedProducts.length - 3))
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + Math.max(1, relatedProducts.length - 3)) % Math.max(1, relatedProducts.length - 3),
    )
  }

  const handleAddToCart = () => {
    // Add to cart functionality
    console.log("Added to cart:", book.title, "Quantity:", quantity)
  }

  const handleBuyNow = () => {
    // Buy now functionality
    console.log("Buy now:", book.title)
  }

  const handleSave = () => {
    // Save/wishlist functionality
    console.log("Saved:", book.title)
  }

  return (
    <div className="min-h-screen bg-white">
      <Nav bg="#050829" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] bg-yellow-400 rounded-lg overflow-hidden">
              <img
                src={book.images[selectedImage] || "/placeholder.svg"}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {book.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-[3/4] bg-yellow-400 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-[#669933]" : "border-transparent"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${book.title} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <h1 className="font-dm-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {book.title}
              </h1>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(book.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-dm-sans text-sm font-medium text-gray-700">{book.rating}</span>
                <span className="font-dm-sans text-sm text-gray-500">({book.reviews} reviews)</span>
              </div>
              <p className="font-dm-sans text-lg text-gray-700">By {book.author}</p>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-dm-sans text-lg font-semibold text-gray-900 mb-2">Description:</h3>
              <p className="font-dm-sans text-gray-600 leading-relaxed">{book.description}</p>
            </div>

            {/* Content */}
            <div>
              <h3 className="font-dm-sans text-lg font-semibold text-gray-900 mb-3">Content:</h3>
              <ul className="space-y-1">
                {book.content.slice(0, 2).map((item, index) => (
                  <li key={index} className="font-dm-sans text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-[#669933] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Video Description */}
            <div>
              <h3 className="font-dm-sans text-lg font-semibold text-gray-900 mb-3">Video Description</h3>
              <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-32 mb-3">
                <button className="bg-white/80 backdrop-blur-sm border border-gray-300 rounded-full p-3 hover:bg-white transition-colors">
                  <Play className="w-6 h-6 text-gray-600 ml-1" />
                </button>
              </div>
              <p className="font-dm-sans text-sm text-gray-600">{book.videoDescription}</p>
            </div>

            {/* Format and Price */}
            <div className="border-t pt-6">
              <div className="mb-4">
                <span className="font-dm-sans text-sm text-gray-600">Format: </span>
                <span className="font-dm-sans text-sm font-medium text-gray-900">{book.format}</span>
              </div>

              {/* Price and Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-gray-900 mb-4">${book.price}</div>
                  <div className="flex gap-3">
                    <button
                      onClick={handleSave}
                      className="flex-1 border border-gray-300 hover:border-[#669933] text-gray-700 hover:text-[#669933] px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <Heart className="w-4 h-4" />
                      Save
                    </button>
                    <button
                      onClick={handleBuyNow}
                      className="flex-1 bg-[#669933] hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Actions */}
            <div className="flex items-center gap-4 pt-4 border-t">
              <button className="flex items-center gap-2 text-gray-600 hover:text-[#669933] transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="font-dm-sans text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-dm-sans text-2xl sm:text-3xl font-bold text-gray-900">Related Products</h2>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 border border-gray-300 rounded-lg hover:border-[#669933] hover:text-[#669933] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 border border-gray-300 rounded-lg hover:border-[#669933] hover:text-[#669933] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 4)}%)` }}
            >
              {relatedProducts.map((product) => (
                <div key={product.id} className="w-1/4 flex-shrink-0 px-2">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-[3/4] bg-yellow-400">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      {product.isPaid && (
                        <div className="absolute top-3 right-3">
                          <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-900">
                            Paid
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                      <h3 className="font-dm-sans text-lg font-bold text-gray-900 mb-1 line-clamp-2">
                        {product.title}
                      </h3>
                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-dm-sans text-sm text-gray-600">{product.rating}</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-1">Book title</div>
                      <div className="text-sm text-gray-500 mb-3">Author</div>
                      <div className="flex items-center justify-between">
                        <span className="font-dm-sans text-lg font-bold text-gray-900">${product.price}</span>
                        <button className="bg-[#669933] hover:bg-green-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-300">
                          Quick look
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ResourcesPage
