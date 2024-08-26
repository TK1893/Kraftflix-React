import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Button } from 'react-bootstrap';

export const UpdateProfile = ({ user, updatedUser }) => {
  const token = localStorage.getItem('token');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthdate: birthday,
    };

    fetch(
      `https://kraftflix-api-d019e99d109c.herokuapp.com/users/${user.Username}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        console.log(response);
        if (response.ok) {
          console.log('Update successful!');
          alert('Profile updated successfully!');
          return response.json();
        } else {
          alert('Update failed!');
        }
      })
      .then((data) => {
        console.log('Data:', data);
        updatedUser(data);
        setUsername(data.Username);
        setPassword(data.Password);
        setEmail(data.Email);
        setBirthday(data.Birthdate);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Card className="h-100">
      <Card.Header>
        <h5>Update Your Data</h5>
      </Card.Header>

      <Card.Body>
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Label>
                  <h6>Username</h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter new e-mail"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  minLength="5"
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>
                  <h6>Password</h6>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>
                  <h6>e-mail</h6>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter new e-mail adress"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Edit Profile
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
};

UpdateProfile.propTypes = {
  user: PropTypes.object.isRequired,
  updatedUser: PropTypes.func.isRequired,
};
