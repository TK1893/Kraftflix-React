import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import './navigation-bar.scss';

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar expand="md" className="kraftflix-nb ">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="kraftflix-brand me-5">
          <p>KRAFTFLIX</p>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-left ">
            {!user && (
              <>
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={NavLink} to="/">
                  Movies
                </Nav.Link>
                <Nav.Link as={NavLink} to={`/users/${user.Username}`}>
                  Profile
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
