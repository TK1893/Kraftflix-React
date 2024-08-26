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
    console.log('User 2: ', user);
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
          // const lsUser2 = JSON.parse(localStorage.getItem('user'));
          // console.log('Local-Storage-User-2 :', lsUser2);
          user.FavoriteMovies = [...filteredFavorites];
          // console.log('User after Deleting', user);
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
    <Container>
      <Row>
        <Col xs={12} className="mt-3">
          <Card>
            <Card.Header>
              <h2>{movie.Title}</h2>
              <h4 className>( {movie.Year} )</h4>
            </Card.Header>
            <Card.Img variant="bottom" src={`${movie.Imageurl}`} />

            <Card.Body>
              <Card.Subtitle>Genre</Card.Subtitle>
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
              <Card.Text>{movie.Featured ? 'Yes' : 'No'}</Card.Text>
            </Card.Body>
            <Card.Footer>
              {isFavorite ? (
                <Button
                  variant="primary"
                  className="delete-button"
                  size="sm"
                  onClick={removefromFavorite}
                >
                  Remove from <span className="heart"> ♥</span> movies
                  <br />
                </Button>
              ) : (
                <Button
                  variant="primary"
                  className="add-button"
                  size="sm"
                  onClick={addtoFavorite}
                >
                  Add to <span className="heart"> ♥</span> movies
                </Button>
              )}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to={'/'}>
            <Button size="lg" className="primary-button-outline mb-3 mx-3">
              Back
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
