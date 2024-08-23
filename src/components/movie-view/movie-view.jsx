import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './movie-view.scss';

export const MovieView = ({ movies, user, token, setUser }) => {
  const { movieId } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const movie = movies.find((m) => m._id === movieId);

  useEffect(() => {
    if (user && user.FavoriteMovies) {
      const fav = user.FavoriteMovies.includes(movieId);
      setIsFavorite(fav);
    }
  }, [movieId, user]);

  const addtoFavorite = () => {
    console.log('User 2: ', user);
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
          alert('Add to favorite succeeded');
          user.FavoriteMovies.push(movieId);
          localStorage.setItem('user', JSON.stringify(user));
          setIsFavorite(true);
        } else {
          alert('Adding failed');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const removefromFavorite = () => {
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
          alert('Deleting from favorite succeeded');
          const lsUser = JSON.parse(localStorage.getItem('user'));
          const filteredFavorites = lsUser.FavoriteMovies.filter(
            (id) => id !== movieId
          );
          lsUser.FavoriteMovies = [...filteredFavorites];
          localStorage.setItem('user', JSON.stringify(lsUser));
          // const lsUser2 = JSON.parse(localStorage.getItem('user'));
          // console.log('Local-Storage-User-2 :', lsUser2);
          user.FavoriteMovies = [...filteredFavorites];
          // console.log('User after Deleting', user);
          setIsFavorite(false);
        } else {
          alert('Deleting failed');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="mv-container">
      <div>
        <img src={movie.Imageurl} className="w-100" />
      </div>
      <div>
        <span>Title:</span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Year:</span>
        <span>{movie.Year}</span>
      </div>
      <div>
        <span>Genre:</span>
        <span>{movie.Genre.Name}</span>
      </div>
      <div>
        <span>Plot:</span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Actors:</span>
        <span> {movie.Actors.join(', ')}</span>
      </div>
      <div>
        <span>Director:</span>
        <span>{movie.Director.Name}</span>
        <span>Biography:</span>
        <span>{movie.Director.Bio}</span>
      </div>

      <div>
        <span>Featured:</span>
        <span>{movie.Featured ? 'Yes' : 'No'}</span>
      </div>
      <div>
        <span>ID:</span>
        <span>{movie._id}</span>
      </div>
      <Link to={'/'}>
        <button className="back-button">Back</button>
      </Link>
      <div className="mt-1">
        {isFavorite ? (
          <button variant="danger" onClick={removefromFavorite}>
            Remove from favorite
          </button>
        ) : (
          <button variant="primary" onClick={addtoFavorite}>
            Add to favorite
          </button>
        )}
      </div>
    </div>
  );
};
