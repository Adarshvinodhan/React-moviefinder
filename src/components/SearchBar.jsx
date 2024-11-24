import React from 'react'
import { Link } from 'react-router-dom'

function SearchBar({handleInput,result}) {
  return (
<div className="text-center p-6 bg-gray-900 min-h-screen flex flex-col items-center justify-center relative">
  {/* Header */}
  <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 animate-fadeInUp">
    Movie Finder
  </h1>

  <h3 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 animate-slideInLeft'>
    Search you're fav Movies & add them to you're Fav's <span className='text-red-400 animate-heart'>❤️</span>
  </h3>

  {/* Input and Button Container */}
  <div className="flex gap-4 items-center mb-8 w-full max-w-md">
  <input
    type="text"
    placeholder="Search for movies"
    onChange={handleInput}
    className="flex-grow px-6 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent "
  />
</div>

  {/* Results with Scrollable Container */}
  <div className="w-full max-w-md h-64 overflow-y-auto bg-gray-800 rounded-md shadow-lg mb-16">
    {result.length > 0 ? (
      result.map((movie) => (
        <ul key={movie.id} className="list-none">
          <Link
            to={`/movie/${movie.id}`}
            className=""
          >
            <li className='text-white py-1.5 px-4 hover:bg-gray-700 border-b border-gray-700 rounded-md transition'>
            {movie.title}
          </li>
          </Link>
        </ul>
      ))
    ) : (
      <p className="text-gray-400 py-4 px-4">No movies found.</p>
    )}
  </div>

  {/* Heart Icon for Mobile Devices */}
  <Link
    to="/saved"
    className="fixed bottom-4 right-4 sm:static sm:bottom-auto sm:right-auto p-3 rounded-full  transition flex items-center justify-center shadow-lg"
  >
    <img
      src="/fav.png"
      alt="fav"
      className="w-8 h-8 sm:w-10 sm:h-10 animate-fadeInUp"
    />
    <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-fadeInUp'>Your Fav's</span>
  </Link>
</div>
)}

export default SearchBar
