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
    // console.log('Username:', username);
    // console.log('Password:', password);
    // console.log('Email:', email);
    // console.log('Birthdate:', birthdate);
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
    <Container>
      <Row className="my-3">
        <Col>
          <CardGroup>
            <Card>
              <Card.Header>Please Register</Card.Header>
              {/* Option für Card.Title */}
              <Card.Body>
                {/* <Card.Title>Please Register</Card.Title> */}
                {/* Option für Card.Header */}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      minLength="3"
                      placeholder="Enter a username"
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter a password"
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBirthdate">
                    <Form.Label>Birthdate: </Form.Label>
                    <Form.Control
                      type="date"
                      value={birthdate}
                      onChange={(e) => setBirthdate(e.target.value)}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="my-3">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>

    // <label>
    //   Username:
    //   <input
    //     type="text"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //     required
    //     minlength="3"
    //   />
    // </label>

    // <label>
    //   Password:
    //   <input
    //     type="password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     required
    //   />
    // </label>
    // <label>
    //   Email:
    //   <input
    //     type="email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     required
    //   />
    // </label>

    // <label>
    //   Birthdate:
    //   <input
    //     type="date"
    //     value={birthdate}
    //     onChange={(e) => setBirthdate(e.target.value)}
    //   />
    // </label>

    // <button type="submit">Submit</button>
  );
};
