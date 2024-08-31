import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { UserInfo } from './user-info';
import { UpdateProfile } from './update-profile';
import { DeleteProfile } from './delete-profile';
import { MovieCard } from '../movie-card/movie-card';
import { FavoriteMovies } from './favorite-movies';
import './profile-view.scss';

export const ProfileView = ({
  user,
  token,
  updatedUser,
  onLoggedOut,
  movies,
  addToFavorites,
  removeFromFavorites,
}) => {
  const profileDelete = () => {
    fetch(
      `https://kraftflix-api-d019e99d109c.herokuapp.com/users/${user.Username}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      console.log(response);
      if (response.ok) {
        alert('Account deleted successfully!');
        console.log('Account deleted successfully!');
        onLoggedOut();
      } else {
        alert('Failed to delete account!');
      }
    });
  };

  return (
    <Container>
      <Row className="justify-content-center ">
        <Col xs={12} md={6} lg={4} className="mb-4">
          <UserInfo user={user} />
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-4">
          <UpdateProfile user={user} updatedUser={updatedUser} />
        </Col>
        <Col md={6} lg={4} className="mb-3">
          <DeleteProfile profileDelete={profileDelete} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header className="ch-pv">Favorite Movies</Card.Header>
            <Card.Body>
              <Container fluid>
                <Row>
                  <FavoriteMovies
                    user={user}
                    movies={movies}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                  />
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Link to={'/'}>
        <Button size="sm" className="primary-button mb-3 ">
          Back
        </Button>
      </Link>
    </Container>
  );
};
