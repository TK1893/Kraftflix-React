import React from 'react';
import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { ProfileView } from '../profile-view/profile-view';

import './main-view.scss';

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  // export const MainView = () => {
  //   // Überprüfen, ob der Eintrag im localStorage gültiges JSON ist
  //   const getValidJSON = (item) => {
  //     try {
  //       return JSON.parse(item);
  //     } catch (e) {
  //       return null;
  //     }
  //   };

  //   const storedUser = localStorage.getItem('user')
  //     ? getValidJSON(localStorage.getItem('user'))
  //     : null;
  //   const storedToken = localStorage.getItem('token')
  //     ? localStorage.getItem('token')
  //     : null;

  //   const [movies, setMovies] = useState([]);
  //   const [user, setUser] = useState(storedUser);
  //   const [token, setToken] = useState(storedToken);
  //   const [favoriteMovies, setFavoriteMovies] = useState([]);

  // ... Rest deines Codes

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch('https://kraftflix-api-d019e99d109c.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data fetched from API : ', data);
        const moviesFromApi = data.map((item) => {
          return {
            Actors: item.Actors,
            Description: item.Description,
            Director: item.Director,
            Featured: item.Featured,
            Genre: item.Genre,
            Imageurl: item.Imageurl,
            Title: item.Title,
            Year: item.Year,
            _id: item._id,
          };
        });
        setMovies(moviesFromApi);
        let favMovies = data.filter((m) => user.FavoriteMovies.includes(m._id));
        setFavoriteMovies(favMovies);
      });
  }, [token]);

  // console.log('neuer state movies', movies);
  // console.log('neuer state favoriteMovies', favoriteMovies);

  const onLoggedIn = (user, token) => {
    setUser(user);
    setToken(token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  };
  const onLoggedOut = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };
  const updatedUser = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <BrowserRouter>
      <NavigationBar user={user} onLoggedOut={onLoggedOut} />

      <Row className="justify-content-md-center main-row">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={onLoggedIn} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/users/:Username"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col md={5}>
                    <ProfileView
                      user={user}
                      token={token}
                      updatedUser={updatedUser}
                      onLoggedOut={onLoggedOut}
                      movies={movies}
                      favoriteMovies={favoriteMovies}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty</Col>
                ) : (
                  <Col md={8}>
                    <MovieView
                      movies={movies}
                      user={user}
                      token={token}
                      setUser={setUser}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col
                        key={movie._id}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        className="mb-5"
                      >
                        <MovieCard movie={movie} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
