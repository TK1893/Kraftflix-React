// src/components/movie-card/movie-card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './movie-card.scss';

export const MovieCard = ({
  movie,
  user,
  addToFavorites,
  removeFromFavorites,
}) => {
  const isFavorite = user.FavoriteMovies.includes(movie._id);

  return (
    <Card className="h-100 movC-c">
      <Card.Body>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Card.Img src={`${movie.Imageurl}`} className="h-100" />
        </Link>
      </Card.Body>
      <Card.Footer className="mt-2">
        <Container>
          <Row>
            <Col xs={9}>{movie.Title}</Col>
            <Col xs={3}>
              {isFavorite ? (
                <Button
                  className="db-small"
                  size="sm"
                  onClick={() => removeFromFavorites(movie._id)}
                >
                  <span className="heart"> ♥ </span>
                </Button>
              ) : (
                <Button
                  size="sm"
                  className="ab-small"
                  onClick={() => addToFavorites(movie._id)}
                >
                  <span className="heart"> ♥</span>
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </Card.Footer>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Imageurl: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    FavoriteMovies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
};
