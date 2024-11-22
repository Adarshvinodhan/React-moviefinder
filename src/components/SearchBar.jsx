import React from 'react'
import { Link } from 'react-router-dom'

function SearchBar({handleInput,result}) {
  return (
    <div className="text-center p-4 bg-gray-900 min-h-screen flex flex-col items-center justify-center">
  {/* Header */}
  <h1 className="text-3xl font-bold text-white mb-4">🎥 Movie Searcher</h1>
  <img src="/fav.png" alt="fav" />

  {/* Input and Button Container */}
  <div className="flex gap-2 items-center mb-4 w-full max-w-sm">
    <input
      type="text"
      placeholder="Search for movies"
      onChange={handleInput}
      className="flex-grow px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
      Search
    </button>
  </div>

  {/* Results with Scrollable Container */}
  <div className="w-full max-w-sm h-64 overflow-y-auto bg-gray-800 rounded-md shadow-lg">
    {result.length > 0 ? (
      result.map((movie) => (
        <ul key={movie.id} className="list-none">
          
          <Link to={`/movie/${movie.id}`} className="text-white py-2 px-4 hover:bg-gray-700">
            {movie.title}
          </Link>
        </ul>
      ))
    ) : (
      <p className="text-gray-400 py-4 px-4">No movies found.</p>
    )}
  </div>
</div>
  )
}

export default SearchBar
