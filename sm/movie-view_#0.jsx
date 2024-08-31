// src\components\movie-view\movie-view.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import './movie-view.scss';

export const MovieView = ({ movies, user, token }) => {
  const { movieId } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const movie = movies.find((m) => m._id === movieId);

  useEffect(() => {
    if (user && user.FavoriteMovies) {
      const fav = user.FavoriteMovies.includes(movieId);
      setIsFavorite(fav);
    }
  }, [movieId, user]);

  const addtoFavorite = () => {
    fetch(
      `https://kraftflix-api-d019e99d109c.herokuapp.com/users/${user.Username}/movies/${movieId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          alert('Add to favorite succeeded');
          user.FavoriteMovies.push(movieId);
          localStorage.setItem('user', JSON.stringify(user));
          setIsFavorite(true);
        } else {
          alert('Adding failed');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const removefromFavorite = () => {
    fetch(
      `https://kraftflix-api-d019e99d109c.herokuapp.com/users/${user.Username}/movies/${movieId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          alert('Deleting from favorite succeeded');
          const lsUser = JSON.parse(localStorage.getItem('user'));
          const filteredFavorites = lsUser.FavoriteMovies.filter(
            (id) => id !== movieId
          );
          lsUser.FavoriteMovies = [...filteredFavorites];
          localStorage.setItem('user', JSON.stringify(lsUser));
          user.FavoriteMovies = [...filteredFavorites];
          setIsFavorite(false);
        } else {
          alert('Deleting failed');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} lg={10} xxl={8} className="mt-3">
          <Card id="mv-card">
            <Card.Header className="mv-header">
              {movie.Title}
              <p>( {movie.Year} )</p>
            </Card.Header>
            <Card.Img variant="bottom" src={`${movie.Imageurl}`} />

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
                  onClick={removefromFavorite}
                >
                  REMOVE from <span className="heart"> ♥ </span> MOVIES
                  <br />
                </Button>
              ) : (
                <Button
                  size="sm"
                  className="add-button"
                  onClick={addtoFavorite}
                >
                  ADD to <span className="heart"> ♥</span> MOVIES
                </Button>
              )}
            </Card.Footer>
          </Card>
          <Card className="b-card">
            <Card.Body>
              <Link to={'/'}>
                <Button size="lg" className="primary-button mb-3 ">
                  Back
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <Row>
        <Col xs={12} md={8} xxl={6} className="mt-3">
          <Link to={'/'}>
            <Button size="lg" className="primary-button mb-3 ">
              Back
            </Button>
          </Link>
        </Col>
      </Row> */}
    </Container>
  );
};
