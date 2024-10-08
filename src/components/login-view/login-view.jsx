import { useState } from 'react';
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  CardGroup,
  Card,
} from 'react-bootstrap';

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    fetch('https://kraftflix-api-d019e99d109c.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login response: ', data);
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert('No such user');
        }
      })
      .catch((e) => {
        alert('Something went wrong');
      });
  };

  return (
    <CardGroup>
      <Card>
        <Card.Header className="ch-pv">Please Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername" className="mt-2">
              <Form.Label className="w-100">Username </Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minlength="3"
                placeholder="Enter your username"
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label className="w-100">Password </Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </Form.Group>
            <Button size="sm" type="submit" className="tertiary-button mt-3">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};
