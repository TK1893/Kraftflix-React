// Here you import the PropTypes library
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './movie-card.scss';

export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={`${movie.Imageurl}`} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Director.Name}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button variant="link">Open</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

// Hier werden alle Props- Beschränkungen für MovieCard definiert
// MovieCard.propTypes = {
//   movie: PropTypes.shape({
//     Title: PropTypes.string.isRequired,
//     Imageurl: PropTypes.string.isRequired,
//     Director: PropTypes.shape({
//       Name: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };
