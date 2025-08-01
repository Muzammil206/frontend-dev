import { SearchIcon, ArrowRight } from "lucide-react"

const Search = () => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-lg p-2 max-w-md w-full">
      <SearchIcon className="w-5 h-5 text-gray-400 ml-3" />
      <input
        type="text"
        placeholder="what do you want to learn?"
        className="flex-1 px-4 py-3 outline-none text-gray-700"
      />
      <button className="bg-[#050829] text-white p-3 rounded-md hover:bg-[#0a0f3d] transition-colors">
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}

export default Search
