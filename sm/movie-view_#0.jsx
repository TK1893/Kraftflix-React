import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
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
    <Card>
      <Card.Header className="justify-content-md-center">
        <h2>{movie.Title}</h2>
        <h4 className>( {movie.Year} )</h4>
      </Card.Header>
      <Card.Body id="light-blue">
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <h5>Movie Data</h5>
                </Card.Header>
                <Card.Body>
                  <Container>
                    <Row>
                      <Col md={10}>
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
                      </Col>
                      <Col md={2}>
                        <Card.Img
                          variant="top"
                          src={`${movie.Imageurl}`}
                          className="w-100"
                        />
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            {/* <Col md={2}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`${movie.Imageurl}`}
                  // className="h-100"
                />
                <Card.Footer>
                  {isFavorite ? (
                    <Button variant="danger" onClick={removefromFavorite}>
                      Remove from favorite
                    </Button>
                  ) : (
                    <Button variant="primary" onClick={addtoFavorite}>
                      Add to favorite
                    </Button>
                  )}
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
              <Card.Img
                variant="top"
                src={`${movie.Imageurl}`}
                className="h-100"
              />
              </Card.Body>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </Card.Body>
      <Link to={'/'}>
        <Button variant="primary">Back</Button>
      </Link>
    </Card>
  );
};
