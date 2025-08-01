
import { useState } from "react"
import TestimonialCard from "./TestimonialCard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Testimonial.css" 

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0) // Keep if needed for custom dot logic

  const testimonials = [
    {
      name: "Clara R. Altman",
      img: "/placeholder.svg?height=48&width=48",
      desc: '"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"',
      occupation: "UI&UX Design",
    },
    {
      name: "Clara R. Altman",
      img: "/placeholder.svg?height=48&width=48",
      desc: '"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"',
      occupation: "UI&UX Design",
    },
    {
      name: "Clara R. Altman",
      img: "/placeholder.svg?height=48&width=48",
      desc: '"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"',
      occupation: "UI&UX Design",
    },
    {
      name: "Michael Chen",
      img: "/placeholder.svg?height=48&width=48",
      desc: '"The courses here have completely transformed my career. The instructors are knowledgeable and the content is always up-to-date with industry standards."',
      occupation: "Software Developer",
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows: false, // Hide default arrows as per design
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "-40px", width: "100%" }}>
        <ul style={{ margin: "0px", display: "flex", justifyContent: "center" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-2.5 h-2.5 rounded-full mx-1 ${
          i === currentSlide ? "bg-[#050829]" : "bg-gray-300"
        } transition-colors duration-300`}
        style={{ display: "inline-block" }}
      ></div>
    ),
  }

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-dm-sans text-4xl md:text-5xl font-bold text-gray-900 inline-block relative pb-2">
            What Students Are Saying
            <svg
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
              width="150"
              height="10"
              viewBox="0 0 150 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 5C25 15 125 0 145 5" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="w-full">
          <Slider {...settings}>
            {testimonials.map((test, i) => (
              <div key={i} className="px-2">
                <TestimonialCard {...test} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
