
import { useState } from "react"
import Nav from "../Component/Nav"
import Footer from "../Component/Footer"
import { Phone, Mail, Send, Paperclip, Shield, Users } from "lucide-react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    attachment: null,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFormData((prev) => ({
      ...prev,
      attachment: file,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-white">
      <Nav bg="#050829" />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">

          <img src="/bg.jpg" alt="Decorative Background" />
      
          
          {/* Decorative curved lines */}
          <div className="absolute left-8 sm:left-16 top-1/4 w-16 sm:w-24 h-16 sm:h-24 border-4 border-yellow-400 rounded-full opacity-30"></div>
          <div className="absolute right-8 sm:right-16 bottom-1/4 w-12 sm:w-20 h-12 sm:h-20 border-4 border-orange-400 rounded-full opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="font-dm-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              We Are A Team Of Tech
              <br className="hidden sm:block" />
              <span className="text-[#669933]"> For Health Experts</span>
            </h1>
            <p className="font-dm-sans text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of learners enhancing their tech skills with our well-
              <br className="hidden md:block" />
              detailed online courses, workshops and innovative challenges.
            </p>
          </div>

          {/* CTA Banner */}
          <div className="bg-[#669933] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-dm-sans text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                Together, let's shape the future of
                <br />
                Digital Health Innovation
              </h2>
              <p className="font-dm-sans text-sm sm:text-base text-white/90 mb-6 sm:mb-8">
                Join us on this exciting learning journey and unlock your
                <br className="hidden sm:block" />
                potential in design and development.
              </p>
              <button className="bg-white text-[#669933] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 touch-manipulation">
                Join Now
              </button>
            </div>
            {/* Decorative Arrow */}
            <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[8px] border-l-[#669933] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-dm-sans text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12 md:mb-16">
            Our Goals
          </h2>
          <p className="font-dm-sans text-base sm:text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12 sm:mb-16 leading-relaxed">
            At Awibi Institute, our aim is to empower African students and professionals with the skills needed to
            thrive in the
            <br className="hidden md:block" />
            digital age through interactive online courses, Hands-on workshops and community-driven initiatives
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Provide Practical Skills */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-dm-sans text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Provide Practical Skills
                  </h3>
                  <p className="font-dm-sans text-sm sm:text-base text-gray-600 leading-relaxed">
                    We focus on delivering practical skills that are relevant to the current industry demands. Our
                    courses are designed to equip learners with the knowledge and tools needed to excel in their chosen
                    field.
                  </p>
                </div>
              </div>
            </div>

            {/* Foster Creative Problem-Solving */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-green-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-dm-sans text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Foster Creative Problem-Solving
                  </h3>
                  <p className="font-dm-sans text-sm sm:text-base text-gray-600 leading-relaxed">
                    We encourage creative thinking and problem-solving abilities, allowing our students to tackle
                    real-world challenges with confidence and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-dm-sans text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in touch</h2>
            <p className="font-dm-sans text-base sm:text-lg text-gray-600">
              Drop a message for us, we will be glad to respond to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
            {/* Full Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Full Name</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name..."
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#669933] focus:border-transparent transition-colors duration-200"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name..."
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#669933] focus:border-transparent transition-colors duration-200"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#669933] focus:border-transparent transition-colors duration-200"
                required
              />
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Message Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#669933] focus:border-transparent transition-colors duration-200"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Message</label>
              <textarea
                name="message"
                rows={6}
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#669933] focus:border-transparent resize-none transition-colors duration-200"
                required
              ></textarea>
            </div>

            {/* Attachment */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-200">
                <Paperclip className="w-4 h-4" />
                <span>Attachment*</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                />
              </label>
              {formData.attachment && (
                <p className="text-sm text-green-600 mt-2">File selected: {formData.attachment.name}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#669933] hover:bg-green-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-colors duration-300 flex items-center gap-2 mx-auto touch-manipulation"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-dm-sans text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Or contact us on
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Phone Numbers */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#669933]" />
                </div>
                <h3 className="font-dm-sans text-lg sm:text-xl font-bold text-gray-900">PHONE NUMBER</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="tel:081-123-456-789"
                  className="block text-base sm:text-lg text-gray-700 hover:text-[#669933] transition-colors duration-200"
                >
                  081-123-456-789
                </a>
                <a
                  href="tel:070-123-456-789"
                  className="block text-base sm:text-lg text-gray-700 hover:text-[#669933] transition-colors duration-200"
                >
                  070-123-456-789
                </a>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-dm-sans text-lg sm:text-xl font-bold text-gray-900">EMAIL ADDRESS</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="mailto:help.hoistflick@gmail.com"
                  className="block text-base sm:text-lg text-gray-700 hover:text-[#669933] transition-colors duration-200 break-all"
                >
                  help.hoistflick@gmail.com
                </a>
                <a
                  href="mailto:career.hoistflick@gmail.com"
                  className="block text-base sm:text-lg text-gray-700 hover:text-[#669933] transition-colors duration-200 break-all"
                >
                  career.hoistflick@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
