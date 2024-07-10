import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { UserInfo } from './user-info';
import { FavoriteMovies } from './favorite-movies';
import { UpdateUser } from './update-user';
import './profile-view.scss';

export const ProfileView = ({ movies, onUpdateUserInfo }) => {
  const [user, setUser] = useState({});
  const favoriteMovieList = movies.filter((movies) => {});
  const getUser = () => {};
  const handleSubmit = (e) => {};
  const removeFav = (id) => {};
  const handleUpdate = (e) => {};
  useEffect(() => {}, []);

  return (
    <Container>
      <Row>
        <Col xs={12} sm={4}>
          <Card>
            <Card.Body>
              <UserInfo name={user.Username} email={user.Email} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={8}>
          <Card>
            <Card.Body>
              <UpdateUser
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
              />
            </Card.Body>
          </Card>
        </Col>
        <FavoriteMovies favoriteMovieList={favoriteMovieList} />
      </Row>
    </Container>
  );
};
