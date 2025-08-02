import { Link } from "react-router-dom"
import CourseCard from "./CourseCard" // Reusing the CourseCard component
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const RelatedCoursesSection = ({ courses }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-dm-sans text-3xl md:text-4xl font-bold text-gray-900">Related courses</h2>
          <Link to="/courses" className="font-dm-sans text-blue-600 hover:underline font-medium">
            See all
          </Link>
        </div>

        {/* Courses Slider */}
        <div className="w-full">
          <Slider {...settings}>
            {courses.map((course) => (
              <div key={course.id} className="px-2">
                <CourseCard {...course} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default RelatedCoursesSection
