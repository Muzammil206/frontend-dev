import { PlayCircle } from "lucide-react"

const CourseCurriculum = ({ modules }) => {
  return (
    <div className="mt-8">
      <h3 className="font-dm-sans text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
      <div className="space-y-4">
        {modules.map((module, index) => (
          <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <PlayCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <p className="font-dm-sans text-base font-medium text-gray-900">{module.title}</p>
              <span className="font-dm-sans text-sm text-gray-600">{module.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseCurriculum
