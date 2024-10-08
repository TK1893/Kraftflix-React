import { useState } from 'react';
import {
  Form,
  Button,
  Card,
  CardGroup,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

export const SignupView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthdate: birthdate,
    };
    fetch('https://kraftflix-api-d019e99d109c.herokuapp.com/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        alert('Signup successful');
        window.location.reload();
      } else {
        alert('Signup failed');
      }
    });
  };

  return (
    <Card>
      <Card.Header className="ch-pv">Please Register</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername" className="mt-2">
            <Form.Label className="w-100">Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength="3"
              placeholder="Enter a username"
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label className="w-100">Password </Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter a password"
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label className="w-100">Email </Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group controlId="formBirthdate" className="mt-3">
            <Form.Label className="w-100">Birthdate </Form.Label>
            <Form.Control
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </Form.Group>

          <Button
            size="sm"
            variant="primary"
            type="submit"
            className="tertiary-button mt-3"
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
