import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { UserInfo } from './user-info';
import { UpdateProfile } from './update-profile';
import { DeleteProfile } from './delete-profile';
import { MovieCard } from '../movie-card/movie-card';
import './profile-view.scss';
import { FavoriteMovies } from './favorite-movies';

export const ProfileView = ({
  user,
  token,
  updatedUser,
  onLoggedOut,
  movies,
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
      <Row>
        {/* <Row className="justify-content-md-center main-row"> */}
        <Col md={12} lg={4} className="mt-3">
          <UserInfo user={user} />
        </Col>
        <Col md={12} lg={4} className="mt-3">
          <UpdateProfile
            user={user}
            updatedUser={updatedUser}
            className="mt-3"
          />
        </Col>
        <Col md={12} lg={4} className="mt-3">
          <DeleteProfile profileDelete={profileDelete} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h5>Favorite Movies</h5>
            </Card.Header>
            <Card.Body>
              <Container>
                <Row>
                  <FavoriteMovies user={user} movies={movies} />
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
