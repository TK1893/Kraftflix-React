import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../movie-card/movie-card';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const FavoriteMovies = ({ favMovies }) => {
  console.log('FavMovies: ', favMovies);
  return (
    <div>
      {/* favMovies.map((movie) => (<MovieCard movie={movie}></MovieCard>)); */}
      {favMovies.length === 0 ? (
        <p>No favorite movies</p>
      ) : (
        favMovies.map((movie) => (
          <Card key={movie._id} className="mb-3">
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              {/* <Card.Text>{movie.Director.Name}</Card.Text> */}
              <Link to={`/movies/${movie._id}`}>
                <Button variant="primary">Movie Info</Button>
              </Link>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

FavoriteMovies.prototype = {
  FavoriteMovies: PropTypes.array.isRequired,
};
