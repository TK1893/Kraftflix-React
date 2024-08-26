import React from 'react';
// import PropTypes from 'prop-types';
import { MovieCard } from '../movie-card/movie-card';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const FavoriteMovies = ({ user, movies }) => {
  const favMovies = movies.filter((m) => user.FavoriteMovies.includes(m._id));
  return (
    // <Container>
    //   <Row className="justify-content-center">
    //     <Col>
    //       <Card>
    //         <Card.Header>
    //           <h5>Favorite Movies</h5>
    //         </Card.Header>
    //         <Card.Body>
    //           {favMovies.length === 0 ? (
    //             <Card.Title> No favorite movies </Card.Title>
    //           ) : (
    //             favMovies.map((movie) => <MovieCard movie={movie}></MovieCard>)
    //           )}
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // // </Container>
    // <>
    //   {favMovies.length === 0 ? (
    //     <p> No favorite movies </p>
    //   ) : (
    //     favMovies.map((movie) => <MovieCard movie={movie}></MovieCard>)
    //   )}
    // // </>
    <>
      {favMovies.length === 0 ? (
        <p> No favorite movies </p>
      ) : (
        favMovies.map((movie) => (
          <Col key={movie._id} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <MovieCard movie={movie} />
          </Col>
        ))
      )}
    </>
  );
};

{
  /* // FavoriteMovies.prototype = {
//   FavoriteMovies: PropTypes.array.isRequired,
// }; */
}
