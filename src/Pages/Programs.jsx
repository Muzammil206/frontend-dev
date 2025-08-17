"use client"

import { useState } from "react"
import Nav from "../Component/Nav"
import Footer from "../Component/Footer"
import { Clock, Users, ArrowRight, Play, ExternalLink } from "lucide-react"
import EventsSection from "../Component/EventsSection"

const ProgramsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Sample programs data
  const programs = [
    {
      id: 1,
      title: "Project Building",
      description: "Develop skills, expert guidance, and resources to connect you with global opportunities.",
      image: "/computer.jpg",
      category: "practical",
      duration: "12 weeks",
      level: "Intermediate",
      students: 245,
      type: "Hands-on",
    },
    {
      id: 2,
      title: "Corporate Training",
      description:
        "Our corporate training programs are designed to meet the specific needs of healthcare organizations to improve patient safety building solutions for teams.",
      image: "/card2.jpg",
      category: "corporate",
      duration: "8 weeks",
      level: "Advanced",
      students: 189,
      type: "Professional",
    },
  ]

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Healthcare Innovation Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      attendees: 500,
      image: "/placeholder.svg?height=200&width=300&text=Healthcare+Summit",
    },
    {
      id: 2,
      title: "Digital Health Workshop",
      date: "March 22, 2024",
      time: "2:00 PM - 6:00 PM",
      attendees: 150,
      image: "/placeholder.svg?height=200&width=300&text=Digital+Health",
    },
  ]

  // Sample student projects
  const studentProjects = [
    {
      id: 1,
      title: "NFT Full website design",
      description: "Complete NFT marketplace with modern UI/UX",
      image: "/placeholder.svg?height=200&width=300&text=NFT+Website",
      student: "John Doe",
      category: "Web Design",
    },
    {
      id: 2,
      title: "Event planning App",
      description: "Mobile app for event management and planning",
      image: "/placeholder.svg?height=200&width=300&text=Event+App",
      student: "Jane Smith",
      category: "Mobile App",
    },
    {
      id: 3,
      title: "LMS Website design",
      description: "Learning management system interface",
      image: "/card2.jpg",
      student: "Mike Johnson",
      category: "Web Design",
    },
  ]

  // Sample articles
  const articles = [
    {
      id: 1,
      title: "The Education Gap",
      excerpt: "Bridging the gap between traditional education and modern healthcare needs.",
      image: "/article.png",
      author: "Dr. Sarah Wilson",
      date: "March 10, 2024",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Economic Empowerment",
      excerpt: "How healthcare education drives economic growth in communities.",
      image: "/article.png",
      author: "Prof. James Miller",
      date: "March 8, 2024",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Economic Empowerment",
      excerpt: "Sustainable healthcare solutions for developing regions.",
      image: "/article.png",
      author: "Dr. Maria Garcia",
      date: "March 5, 2024",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Catalyst for Growth",
      excerpt: "Innovation in healthcare education as a catalyst for professional growth.",
      image: "/article.png",
      author: "Dr. Robert Chen",
      date: "March 3, 2024",
      readTime: "8 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Nav bg="#050829" />

      {/* Hero Section - Enhanced Responsiveness */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className=" w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center">
          <img
            src="/healthcare-hero.png"
            alt="Healthcare Programs"
            className="w-full h-full object-cover object-center"
          />
         
        </div>
        
      </section>

      {/* Events Section - Enhanced Mobile Layout */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="w-full bg-[#050829] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <img
                  src="/event.jpg"
                  alt="Healthcare Events"
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 sm:p-4 hover:bg-white/30 transition-colors touch-manipulation">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                  </button>
                </div>
              </div>
              <div className="text-white order-1 lg:order-2">
                <h2 className="font-dm-sans text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Events</h2>
                <p className="font-dm-sans text-base sm:text-lg mb-6 sm:mb-8 opacity-90 leading-relaxed">
                  Join interactive workshops, webinars, and health talks designed to accelerate your growth and connect
                  you with industry experts. We create impactful learning experiences for all skill levels.
                </p>
                <button className="border border-[#669933] hover:border-white hover:bg-[#669933] text-[#669933] hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 touch-manipulation">
                  View Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Courses Section - Improved Mobile Spacing */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-dm-sans text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Online courses
              </h2>
              <p className="font-dm-sans text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Access a wide range of expertly crafted courses designed to help you learn new skills, advance your
                goals or pivot your career through a range of short-hour and professional courses.
              </p>
              <button className="bg-white border border-[#669933] hover:bg-[#669933] hover:text-white text-[#669933] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors duration-300 touch-manipulation">
                Explore
              </button>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <img
                src="/online.png"
                alt="Online Learning"
                className="w-full max-w-sm sm:max-w-md h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid - Enhanced Mobile Cards */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 sm:h-56 md:h-64">
                  <img src={program.image || "/card2.jpg"} alt={program.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <span className="bg-[#669933] px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {program.type}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-dm-sans text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {program.title}
                  </h3>
                  <p className="font-dm-sans text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{program.students} students</span>
                    </div>
                  </div>
                  <button className="bg-[#669933] hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base touch-manipulation">
                    View Events
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Projects Showcase - Responsive Grid */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-dm-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8 sm:mb-12 px-4">
            See what some of our students built
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {studentProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-40 sm:h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-2.5 sm:p-3 hover:bg-white/30 transition-colors touch-manipulation">
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </button>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-dm-sans text-lg sm:text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="font-dm-sans text-gray-600 mb-3 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-500">by {project.student}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Events CTA - Mobile Optimized */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-dm-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Stay ahead with our exclusive events
              </h2>
              <p className="font-dm-sans text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Join interactive workshops, webinars, and bootcamps designed to accelerate your growth and connect you
                with like minds.
              </p>
              <button className="bg-[#669933] hover:bg-green-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors duration-300 touch-manipulation">
                View Events
              </button>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src="/placeholder.svg?height=400&width=600&text=Exclusive+Events"
                alt="Exclusive Events"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <EventsSection />

      {/* Articles Section - Responsive Grid */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-dm-sans text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
            Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-40 sm:h-48">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-dm-sans text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="font-dm-sans text-gray-600 mb-3 sm:mb-4 text-sm line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt={article.author}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-900">{article.author}</p>
                      <p className="text-xs text-gray-500">{article.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    <button className="text-[#669933] hover:text-green-700 font-medium text-xs sm:text-sm touch-manipulation">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
            <h2 className="font-dm-sans text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
              Ready to Start Your Journey?
            </h2>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name (Principal/Company)</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#669933] focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#669933] focus:border-transparent text-sm sm:text-base"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#669933] focus:border-transparent text-sm sm:text-base">
                  <option>Select your country</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Brief</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your healthcare goals..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#669933] focus:border-transparent resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#669933] hover:bg-green-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-colors duration-300 touch-manipulation"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProgramsPage
