// Here you import the PropTypes library
import React from 'react';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
  );
};

// Hier werden alle Props- Beschränkungen für BookCard definiert
// MovieCard.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     author: PropTypes.string,
//   }).isRequired,
//   onMovieClick: PropTypes.func.isRequired,
// };
