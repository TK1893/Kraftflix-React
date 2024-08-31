// src\components\main-view\main-view.jsx

import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { ProfileView } from '../profile-view/profile-view';
import './main-view.scss';

// ++ MainView ++++
export const MainView = () => {
  const getValidJSON = (item) => {
    try {
      return JSON.parse(item);
    } catch (e) {
      return null;
    }
  };

  const storedUser = localStorage.getItem('user')
    ? getValidJSON(localStorage.getItem('user'))
    : null;
  const storedToken = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : null;
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);

  //  ******************************
  //  ++ Functions ++++
  //  ******************************
  const onLoggedOut = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  const onLoggedIn = (user, token) => {
    setUser(user);
    setToken(token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  };

  const updatedUser = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  //  *********************************
  //  ++ Fetch Movies from API ++++
  //  *********************************
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
      })
      .catch((e) => {
        console.log(e);
      });
  }, [token]);

  const addToFavorites = (movieId) => {
    fetch(
      `https://kraftflix-api-d019e99d109c.herokuapp.com/users/${user.Username}/movies/${movieId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          alert('Adding to favorites succeded!');
          const updatedFavorites = [...user.FavoriteMovies, movieId];
          const updatedUser = { ...user, FavoriteMovies: updatedFavorites };
          setUser(updatedUser);
          localStorage.setItem('user', JSON.stringify(updatedUser));
        } else {
          alert('Adding failed!');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const removeFromFavorites = (movieId) => {
    fetch(
      `https://kraftflix-api-d019e99d109c.herokuapp.com/users/${user.Username}/movies/${movieId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          alert('Deleting from favorites succeded!');
          const updatedFavorites = user.FavoriteMovies.filter(
            (id) => id !== movieId
          );
          const updatedUser = { ...user, FavoriteMovies: updatedFavorites };
          setUser(updatedUser);
          localStorage.setItem('user', JSON.stringify(updatedUser));
        } else {
          alert('Deleting failed!');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <BrowserRouter>
      <NavigationBar user={user} onLoggedOut={onLoggedOut} />
      <Row className="justify-content-center main-row">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col xs={12} sm={10} md={8} lg={6} xl={5}>
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
                  <Col xs={12} sm={10} md={8} lg={6} xl={5}>
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
                  <Col xs={12}>
                    <ProfileView
                      user={user}
                      token={token}
                      updatedUser={updatedUser}
                      onLoggedOut={onLoggedOut}
                      movies={movies}
                      addToFavorites={addToFavorites}
                      removeFromFavorites={removeFromFavorites}
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
                  <Col classname="mx-2">
                    <MovieView
                      movies={movies}
                      user={user}
                      addToFavorites={addToFavorites}
                      removeFromFavorites={removeFromFavorites}
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
                        className="mb-3"
                      >
                        <MovieCard
                          key={movie._id}
                          movie={movie}
                          user={user}
                          addToFavorites={() => addToFavorites(movie._id)}
                          removeFromFavorites={() =>
                            removeFromFavorites(movie._id)
                          }
                        />
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
