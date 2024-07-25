import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const ProfileView = ({ movies, onUpdateUserInfo }) => {
  const [user, setUser] = useState({});
  const favoriteMovieList = movies.filter((movies) => {});
  const getUser = () => {};
  const handleSubmit = (e) => {};
  const removeFav = (id) => {};
  const handleUpdate = (e) => {};
  useEffect(() => {}, []);

  return (
    <div>
      <p> User: {user.Username}</p>
      <p>Email: {user.Email}</p>
      <div>
        <h2>Favorite.Movies</h2>
        {favoriteMovieList.map((movies) => {
          return (
            <div key={movies._id}>
              <img src={movies.ImagePath} />
              <Link to={`/movies/${movies._id}`}>
                <h4>{movies.Tile}</h4>
              </Link>
              <button variant="secondary" onClick={() => removeFav(movies._id)}>
                Remove from List
              </button>
            </div>
          );
        })}
      </div>
      <form className="profile-form" onSubmit={(e) => handleSubmit(e)}>
        <label>Username:</label>
        <input
          type="text"
          name="Username"
          defaultValue={user.Username}
          onChange={(e) => handleUpdate(e)}
        />
        <label>Password</label>
        <input
          type="password"
          name="Password"
          defaultValue={user.Password}
          onChange={(e) => handleUpdate(e)}
        />
        <label>Email adress</label>
        <input
          type="email"
          name="email"
          defaultValue={user.Email}
          onChange={(e) => handleUpdate(e.target.value)}
        />
        <button variant="primary" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};
