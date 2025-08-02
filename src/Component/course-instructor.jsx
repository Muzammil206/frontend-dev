const CourseInstructor = ({ instructor }) => {
  return (
    <div className="mt-8">
      <h3 className="font-dm-sans text-2xl font-bold text-gray-900 mb-6">Educator</h3>
      <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
        <img
          src={instructor.avatar || "/placeholder.svg?height=80&width=80&query=instructor+avatar"}
          alt={instructor.name}
          className="w-20 h-20 rounded-full object-cover flex-shrink-0"
        />
        <div>
          <h4 className="font-dm-sans text-xl font-bold text-gray-900">{instructor.name}</h4>
          <p className="font-dm-sans text-base text-gray-700">{instructor.title}</p>
          <p className="font-dm-sans text-sm text-gray-600">{instructor.experience}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseInstructor
