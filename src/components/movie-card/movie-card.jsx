import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './movie-card.scss';

export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Card.Img src={`${movie.Imageurl}`} className="h-100" />
        </Link>
      </Card.Body>
      <Card.Footer className="mt-2">{movie.Title}</Card.Footer>
    </Card>
  );
};
