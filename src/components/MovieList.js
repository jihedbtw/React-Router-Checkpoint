import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          
          <img src={movie.posterURL} alt={movie.title} />
          <Link to={`/movie/${encodeURIComponent(movie.title)}`}>
            View Description and Trailer
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
