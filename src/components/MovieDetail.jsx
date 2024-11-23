import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

export default function MovieDetail({addToSaved,isMovieSaved}) {
  const {id} = useParams();  
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=2b75de1b4f8e44919afcc3329b0a1e7c`
        );
        
        if (!response.ok) {
          throw new Error("Movie not found");
        }

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return (
      <div className="bg-gray-900 text-white text-center p-6 min-h-screen flex justify-center items-center">
        <h2>{error}</h2>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="bg-gray-900 text-white text-center p-6 min-h-screen flex justify-center items-center">
        <h2>Loading movie details...</h2>
      </div>
    );
  }

  return (
<div className="bg-gray-900 min-h-screen flex flex-col items-center justify-start p-6 text-white">
  <div className="w-full max-w-4xl flex flex-col lg:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden">
    {/* Movie Image */}
    <div className="w-full lg:w-1/3 h-full">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>

    {/* Movie Details */}
    <div className="p-6 flex flex-col justify-between lg:w-2/3 overflow-y-auto max-h-screen">
      <div className="flex items-center mb-4">
        <h1 className="text-4xl font-bold mr-3">{movie.title}</h1>
        {isMovieSaved(movie.id)?
        (<p className="text-red-500 font-semibold">Added to Favourites</p>):
        (<img src="/fav.png" alt="Favorite Icon" className="w-8 h-8 animate-heart" onClick={()=>addToSaved(movie)} />)
        }
        
      </div>
      <div className="mb-4">
        <p className="text-lg mb-2">
          <strong>Year:</strong> {movie.release_date.split("-")[0]}
        </p>
        <p className="text-lg mb-2">
          <strong>Director:</strong>
          {movie.director ? movie.director : "N/A"}
        </p>
        <p className="text-lg mb-4">
          <strong>Description:</strong> {movie.overview}
        </p>
        <p className="text-lg mb-4">
          <strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p className="text-lg">
          <strong>Rating:</strong> {movie.vote_average} / 10
        </p>
      </div>

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Back to Movies List
      </button>
    </div>
  </div>
</div>


  );
};


