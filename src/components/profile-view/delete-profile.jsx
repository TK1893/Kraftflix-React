import React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';

export const DeleteProfile = ({ profileDelete }) => {
  return (
    <Card>
      <Card.Header className="ch-pv">Delete Your Account</Card.Header>
      <Card.Body>
        <Button
          className="tertiary-button"
          onClick={() => {
            profileDelete();
          }}
        >
          DELETE ACCOUNT
        </Button>
      </Card.Body>
    </Card>
  );
};
