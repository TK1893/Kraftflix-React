import React from 'react';
import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';

import './main-view.scss';

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

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
            actors: item.Actors,
            description: item.Description,
            director: item.Director,
            featured: item.Featured,
            genre: item.Genre,
            image: item.Imageurl,
            title: item.Title,
            year: item.Year,
            id: item._id,
          };
        });
        setMovies(moviesFromApi);
      });
  }, [token]);
  console.log('neuer state movies', movies);

  return (
    <BrowserRouter>
      <Row className="justify-content-md-center main-row">
        <Routes>
          {!user ? (
            <Col md={5} style={{ border: '1px solid black' }}>
              <LoginView
                onLoggedIn={(user, token) => {
                  setUser(user);
                  setToken(token);
                }}
              />
              or
              <SignupView />
            </Col>
          ) : selectedMovie ? (
            <>
              <button
                onClick={() => {
                  setUser(null);
                  setToken(null);
                  localStorage.clear();
                }}
              >
                Logout
              </button>
              <Col md={8} style={{ border: '1px solid black' }}>
                <MovieView
                  style={{ border: '1px solid green' }}
                  movie={selectedMovie}
                  onBackClick={() => setSelectedMovie(null)}
                />
              </Col>
            </>
          ) : movies.length === 0 ? (
            <>
              <button
                onClick={() => {
                  setUser(null);
                  setToken(null);
                  localStorage.clear();
                }}
              >
                Logout
              </button>
              <div>The list is empty!</div>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setUser(null);
                  setToken(null);
                  localStorage.clear();
                }}
              >
                Logout
              </button>
              <>
                {movies.map((movie) => (
                  <Col key={movie.id} md={3} className="mb-5">
                    <MovieCard
                      movie={movie}
                      onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                      }}
                    />
                  </Col>
                ))}
              </>
            </>
          )}
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
