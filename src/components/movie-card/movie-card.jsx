// Here you import the PropTypes library
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

import './movie-card.scss';

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card onClick={() => onMovieClick(movie)} className="h-100">
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director.Name}</Card.Text>
        {/* <Button onClick={() => onMovieClick(movie)} variant="link">
          Open
        </Button> */}
      </Card.Body>
    </Card>
  );
};

// Hier werden alle Props- Beschränkungen für BookCard definiert
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
