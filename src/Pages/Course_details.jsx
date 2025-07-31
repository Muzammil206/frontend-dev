// removed 'use client' directive

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Nav from "../Component/Nav"
import Footer from "../Component/Footer"
import PriceInfo from "../Component/PriceInfo"
import CoursesCard from "../Component/CoursesCard"

const CourseDetail = () => {
  const { courseId } = useParams() // Get course ID from URL
  const navigate = useNavigate()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState(false)
  const [index, setIndex] = useState(0)

  // Your courses data (you can move this to a separate file)
  const allCourses = [
    {
      id: 1,
      free: true,
      name: "Design",
      title: "Typography in web design: Enhancing UI/UX web apps",
      level: "Professional",
      courseType: "Professional",
      subcategory: "Web Design",
      time: "6 months",
      date: "Jan 24, 2024",
      previewImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      previewVideo: "../Videos/video1.mp4",
      hasVideo: true,
      instructor: "Juanita Bell",
      avatar: "/placeholder.svg?height=32&width=32",
      price: 0,
      originalPrice: 0,
      rating: 4.7,
      students: 1250,
      description: "Master the art of typography in web design and create stunning UI/UX experiences.",
      tags: ["Typography", "UI/UX", "Web Design", "Frontend"],
      learningOutcomes: [
        "Fundamental principles of design",
        "Design elements",
        "Typography fundamentals",
        "Color theory and application",
        "Layout and composition",
        "User interface design patterns",
      ],
      courseContent: [
        {
          weeks: [
            {
              title: "Introduction to Typography in Web Design",
              desc: "Learn the fundamental principles of typography and how it applies to web design. Understand the importance of typeface selection and hierarchy.",
            },
            {
              title: "Font Selection and Pairing",
              desc: "Master the art of selecting and pairing fonts for web projects. Learn about web-safe fonts and modern font loading techniques.",
            },
            {
              title: "Typography Hierarchy and Spacing",
              desc: "Create effective visual hierarchy using typography. Understand line height, letter spacing, and how to create readable content.",
            },
          ],
        },
        {
          weeks: [
            {
              title: "Responsive Typography",
              desc: "Learn how to make typography work across different devices and screen sizes. Understand fluid typography and viewport units.",
            },
            {
              title: "Typography in User Interface Design",
              desc: "Apply typography principles to UI elements like buttons, forms, and navigation. Create consistent typographic systems.",
            },
            {
              title: "Advanced Typography Techniques",
              desc: "Explore advanced CSS typography features, custom fonts, and performance optimization for web typography.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      free: false,
      name: "Development",
      title: "Software Development Fundamentals",
      level: "Monthly crash course",
      courseType: "Monthly crash course",
      subcategory: "Software Development",
      time: "3 months",
      date: "Jan 23, 2024",
      previewImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      previewVideo: "../Videos/video2.mp4",
      hasVideo: true,
      instructor: "Mike Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      price: 149,
      originalPrice: 199,
      rating: 4.8,
      students: 1345,
      description: "Learn software development from scratch with modern practices and industry-standard tools.",
      tags: ["Software Development", "Programming", "Coding"],
      learningOutcomes: [
        "Programming fundamentals",
        "Object-oriented programming",
        "Database design",
        "API development",
        "Testing methodologies",
        "Version control with Git",
      ],
      courseContent: [
        {
          weeks: [
            {
              title: "Programming Fundamentals",
              desc: "Learn the basic concepts of programming including variables, data types, control structures, and functions.",
            },
            {
              title: "Object-Oriented Programming",
              desc: "Understand classes, objects, inheritance, and polymorphism. Learn to write maintainable and scalable code.",
            },
            {
              title: "Data Structures and Algorithms",
              desc: "Master essential data structures like arrays, lists, and trees. Learn common algorithms and their applications.",
            },
          ],
        },
        {
          weeks: [
            {
              title: "Database Design and Management",
              desc: "Learn relational database concepts, SQL queries, and database design principles for efficient data storage.",
            },
            {
              title: "API Development and Integration",
              desc: "Build and consume APIs. Understand REST principles and how to integrate third-party services.",
            },
            {
              title: "Testing and Deployment",
              desc: "Learn testing methodologies, continuous integration, and deployment strategies for production applications.",
            },
          ],
        },
      ],
    },
    // Add more courses as needed
  ]

  // Find course by ID
  useEffect(() => {
    const foundCourse = allCourses.find((c) => c.id === Number.parseInt(courseId))
    if (foundCourse) {
      setCourse(foundCourse)
    } else {
      // Course not found, redirect to courses page
      navigate("/courses")
    }
    setLoading(false)
  }, [courseId, navigate])

  // Get related courses (exclude current course)
  const relatedCourses = allCourses.filter((c) => c.id !== Number.parseInt(courseId)).slice(0, 3)

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course details...</p>
        </div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/courses")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            Back to Courses
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Nav />
      <main className="lg:px-20 px-6">
        <section className="flex flex-col justify-center items-center md:pb-[5rem] md:pt-[10rem] pt-[7rem] md:gap-16 gap-4">
          <h1 className="md:block hidden text-4xl font-bold text-center">{course.title}</h1>
          <div className="relative w-max md:pt-[4rem] flex md:flex-row flex-col gap-8">
            <div>
              <video
                className="shadow-lg md:w-[48.5rem] md:h-[36.4375rem] h-[10.5rem] md:m-0 m-auto rounded-lg"
                controls
                poster={course.previewImage}
              >
                <source src={course.previewVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="md:flex hidden flex-col border-[1px] border-[#E9EAF0] gap-4 rounded-2xl mt-11 px-8 pt-3 pb-6">
                <h1 className="md:text-[28px] text-xl font-bold underline">What you'll learn</h1>
                <ul className="list-disc grid md:grid-cols-2 grid-cols-1 font-Poppins md:pl-0 pl-4">
                  {course.learningOutcomes?.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </div>
            <PriceInfo course={course} />
            <div className="md:hidden flex flex-col border-[1px] border-[#E9EAF0] gap-4 rounded-2xl md:mt-11 px-8 pt-3 pb-6">
              <h1 className="md:text-[28px] text-xl font-bold underline">What you'll learn</h1>
              <ul className="list-disc grid md:grid-cols-2 grid-cols-1 font-Poppins md:pl-0 pl-4">
                {course.learningOutcomes?.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="flex flex-col">
          <div className="md:shadow-lg rounded-3xl flex flex-col gap-0 md:p-10 md:pb-6 p-3">
            <header className="flex flex-col gap-7">
              <h1 className="font-bold md:text-[32px] text-xl underline mb-4">Course Content</h1>
            </header>
            {course.courseContent?.map((module, i) => (
              <div key={i} className="Lessons flex flex-col">
                <button
                  onClick={() => {
                    setActive(!active || index !== i)
                    setIndex(i)
                  }}
                  className="md:text-2xl text-[18px] flex justify-start items-center gap-4 py-5 border-b-[1px] border-b-[#E2E8F0]"
                >
                  <i
                    className={`fa fa-chevron-down md:text-2xl text-[18px] font-[100] transition-transform ${
                      active && i === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  ></i>
                  Week {i + 1}
                </button>
                <aside
                  className={`pl-10 flex flex-col gap-6 transition-all duration-300 ${
                    active && i === index ? "py-6 h-max opacity-100" : "py-0 h-0 overflow-hidden opacity-0"
                  }`}
                >
                  <h1 className="text-[#156060] md:text-3xl text-xl font-bold relative md:-left-10">Module {i + 1}:</h1>
                  {module.weeks.map((week, j) => (
                    <div key={j} className="each flex flex-col gap-5">
                      <div className="text-xl flex md:gap-6 md:flex-row flex-col font-body">
                        <h1 className="text-black">Lesson {j + 1}:</h1>
                        <p className="text-[#156060] md:text-base text-sm">{week.title}</p>
                      </div>
                      <p className="text-[#636262] md:block hidden">{week.desc}</p>
                    </div>
                  ))}
                </aside>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-16 pb-[5rem] md:pt-[10rem] pt-12">
          <header className="font-Poppins flex justify-between items-center">
            <h1 className="font-medium text-3xl">Related courses</h1>
            <button
              onClick={() => navigate("/courses")}
              className="text-xl font-bold text-[#49BBBD] hover:text-[#3a9a9c] transition-colors"
            >
              See all
            </button>
          </header>
          <div className="courses grid md:gap-[6.25rem] gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between w-full">
            {relatedCourses.map((relatedCourse) => (
              <CoursesCard key={relatedCourse.id} {...relatedCourse} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default CourseDetail
