import React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';

export const DeleteProfile = ({ profileDelete }) => {
  return (
    <Card>
      <Card.Header>
        <h5>Delete Your Account</h5>
      </Card.Header>
      <Card.Body>
        <Button
          variant="danger"
          onClick={() => {
            profileDelete();
          }}
        >
          Delete account
        </Button>
      </Card.Body>
    </Card>
  );
};
