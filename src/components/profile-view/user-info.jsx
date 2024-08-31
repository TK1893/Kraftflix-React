import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const UserInfo = ({ user }) => {
  const formattedBirthdate = new Date(user.Birthdate)
    .toISOString()
    .split('T')[0];

  return (
    <Card className="user-data h-100">
      <Card.Header className="ch-pv">Your Info</Card.Header>
      <Card.Body>
        <Card>
          <Card.Header className="ch-ui">Name</Card.Header>
          <Card.Body className="uI-cB">
            <Card.Text>{user.Username}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="ch-ui">e-mail</Card.Header>
          <Card.Body className="uI-cB">
            <Card.Text>{user.Email}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="ch-ui">Birthdate</Card.Header>
          <Card.Body className="uI-cB">
            <Card.Text>{formattedBirthdate}</Card.Text>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
};
