import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const UserInfo = ({ user }) => {
  const formattedBirthdate = new Date(user.Birthdate)
    .toISOString()
    .split('T')[0];

  return (
    <Card className="user-data h-100">
      <Card.Header>
        <h5>Your Info</h5>
      </Card.Header>
      <Card.Body>
        <Card>
          <Card.Header>
            <h6>Name</h6>{' '}
          </Card.Header>
          <Card.Body>
            {/* <Card.Subtitle>Name</Card.Subtitle> */}
            <Card.Text>{user.Username}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <h6>e-mail</h6>
          </Card.Header>
          <Card.Body>
            {/* <Card.Subtitle>e-mail</Card.Subtitle> */}
            <Card.Text>{user.Email}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <h6>Birthdate</h6>
          </Card.Header>
          <Card.Body>
            {/* <Card.Subtitle>Birthdate</Card.Subtitle> */}
            <Card.Text>{formattedBirthdate}</Card.Text>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
};
