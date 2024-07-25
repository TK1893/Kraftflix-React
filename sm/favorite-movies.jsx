import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Figure, Button, Card } from 'react-bootstrap';

export const FavoriteMovies = ({ favoriteMovieList }) => {
  {
    // ...
    let url = `https://myflix.herokuapp.com/users/${localStorage.getItem(
      'user'
    )}/movies/${id}`;
    axios.delete(url, { headers: { Autorization: `Bearer ${token}` } });
  }

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <h2>Favorite Movies</h2>
          </Col>
        </Row>
        <Row>
          {favoriteMovieList.map((movies) => {
            return (
              <Col xs={12} md={6} lg={3} key={movies._id} className="fav-movie">
                <Figure>
                  <Link to={`/movies/${movies._id}`}>
                    <Figure.Image src={movies.ImagePath} alt={movies.Title} />
                    <Figure.Caption>{movies.Title}</Figure.Caption>
                  </Link>
                </Figure>
                <Button
                  variant="secondary"
                  onClick={() => removeFav(movies._id)}
                >
                  Remove
                </Button>
              </Col>
            );
          })}
        </Row>
      </Card.Body>
    </Card>
  );
};
