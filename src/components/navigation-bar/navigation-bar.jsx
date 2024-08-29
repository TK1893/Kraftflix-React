// Bootstrap NavigationBar
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// export const NavigationBar = ({ user, onLoggedOut }) => {
//   return (
//     <Navbar expand="lg" bg="dark" data-bs-theme="dark">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           kraftFlix
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {!user && (
//               <>
//                 <Nav.Link as={Link} to="/login">
//                   Login
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/signup">
//                   Signup
//                 </Nav.Link>
//               </>
//             )}
//             {user && (
//               <>
//                 <Nav.Link as={Link} to="/">
//                   Home
//                 </Nav.Link>
//                 <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
// CF NavigationBar

import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './navigation-bar.scss';

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar bg="black" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="kraftflix-brand mx-3">
          <p>KRAFTFLIX</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login" className="mx-3">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" className="mx-3">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/" className="mx-3">
                  Movies
                </Nav.Link>
                <Nav.Link as={Link} to="/users/:Username" className="mx-3">
                  Profile
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut} className="mx-3">
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
