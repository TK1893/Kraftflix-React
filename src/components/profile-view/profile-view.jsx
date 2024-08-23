import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { UserInfo } from './user-info';
import { ProfileUpdate } from './profile-update';
import { MovieCard } from '../movie-card/movie-card';
import './profile-view.scss';

export const ProfileView = ({
  user,
  token,
  updatedUser,
  onLoggedOut,
  movies,
  // favoriteMovies,
}) => {
  console.log('user:', user);
  const favoriteMovies = movies.filter((m) =>
    user.FavoriteMovies.includes(m._id)
  );

  const formattedBirthdate = new Date(user.Birthdate)
    .toISOString()
    .split('T')[0];
  console.log('formattedBirthdate:', formattedBirthdate);

  const ProfileDelete = () => {
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
        console.log('Account deleted successfully!');
        onLoggedOut();
      } else {
        alert('Failed to delete account!');
      }
    });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Card className="user-data">
            <Card.Header>
              <h2>User Info</h2>
            </Card.Header>
            <Card.Body>
              <UserInfo
                name={user.Username}
                email={user.Email}
                birthdate={formattedBirthdate}
                password={user.Password}
                id={user._id}
                favMovies={user.FavoriteMovies}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <Card>
            <Card.Header>
              <h2>Update User Data</h2>
            </Card.Header>
            <Card.Body>
              <ProfileUpdate
                user={user}
                token={token}
                updatedUser={updatedUser}
              />
            </Card.Body>
            <Card.Body>
              <Button
                variant="danger"
                onClick={() => {
                  ProfileDelete();
                }}
              >
                Delete account
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h2>Favorite Movies</h2>
            </Card.Header>
            <Card.Body>
              {favoriteMovies.map((movie) => (
                <MovieCard movie={movie}></MovieCard>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
