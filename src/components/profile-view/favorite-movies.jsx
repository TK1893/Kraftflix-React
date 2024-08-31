import React from 'react';
// import PropTypes from 'prop-types';
import { MovieCard } from '../movie-card/movie-card';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const FavoriteMovies = ({
  user,
  movies,
  addToFavorites,
  removeFromFavorites,
}) => {
  const favoriteMovies = movies.filter((m) =>
    user.FavoriteMovies.includes(m._id)
  );
  return (
    <>
      {favoriteMovies.length === 0 ? (
        <p> No favorite movies </p>
      ) : (
        favoriteMovies.map((movie) => (
          <Col key={movie._id} sm={6} md={4} lg={3} xxl={2} className="mb-3">
            <MovieCard
              key={movie._id}
              movie={movie}
              user={user}
              addToFavorites={() => addToFavorites(movie._id)}
              removeFromFavorites={() => removeFromFavorites(movie._id)}
            />
          </Col>
        ))
      )}
    </>
  );
};

{
  /* // FavoriteMovies.prototype = {
//   FavoriteMovies: PropTypes.array.isRequired,
// }; */
}
