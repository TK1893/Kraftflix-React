// src\components\movie-view\movie-view.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import './movie-view.scss';

export const MovieView = ({
  movies,
  user,
  addToFavorites,
  removeFromFavorites,
}) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m._id === movieId);

  if (!movie) return <div>Movie not found!</div>;

  const isFavorite = user.FavoriteMovies.includes(movie._id);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} lg={10} xxl={8} className=" mV-col">
          <Card id="mV-c">
            <Card.Header className="mv-header">
              {movie.Title}
              <p>( {movie.Year} )</p>
            </Card.Header>
            <Card.Img className="mt-3" src={`${movie.Imageurl}`} />

            <Card.Body id="mv-card-body">
              <Card.Subtitle className="mt-2">Genre</Card.Subtitle>
              <Card.Text>{movie.Genre.Name}</Card.Text>
              <Card.Subtitle>Director</Card.Subtitle>
              <Card.Text>{movie.Director.Name}</Card.Text>
              <Card.Subtitle>Actors</Card.Subtitle>
              <Card.Text> {movie.Actors.join(', ')}</Card.Text>
              <Card.Subtitle>Plot</Card.Subtitle>
              <Card.Text>{movie.Description}</Card.Text>
              <Card.Subtitle> Director Bio</Card.Subtitle>
              <Card.Text>{movie.Director.Bio}</Card.Text>
              <Card.Subtitle>Featured</Card.Subtitle>
              <Card.Text className="mb-2">
                {movie.Featured ? 'Yes' : 'No'}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {isFavorite ? (
                <Button
                  className="delete-button"
                  size="sm"
                  onClick={() => removeFromFavorites(movie._id)}
                >
                  REMOVE from <span className="heart"> ♥ </span> MOVIES
                </Button>
              ) : (
                <Button
                  size="sm"
                  className="add-button"
                  onClick={() => addToFavorites(movie._id)}
                >
                  ADD to <span className="heart"> ♥</span> MOVIES
                </Button>
              )}
            </Card.Footer>
          </Card>

          <Link to={'/'}>
            <Button size="sm" className="primary-button mb-3 ">
              Back
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

MovieView.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Year: PropTypes.number.isRequired,
      Imageurl: PropTypes.string.isRequired,
      Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
      }).isRequired,
      Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string,
      }).isRequired,
      Actors: PropTypes.arrayOf(PropTypes.string).isRequired,
      Description: PropTypes.string.isRequired,
      Featured: PropTypes.bool.isRequired,
    })
  ).isRequired,
  user: PropTypes.shape({
    FavoriteMovies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
};
