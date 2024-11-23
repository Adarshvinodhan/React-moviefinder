import React from 'react'

function SavedMovies({movies}) {
    console.log(movies)
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Saved</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-white truncate">
                {movie.title}
              </h2>
              <p className="text-gray-400 text-sm">
                Rating: {movie.vote_average} / 10
              </p>
              <p className="text-gray-400 text-sm">
                Release: {movie.release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default SavedMovies



