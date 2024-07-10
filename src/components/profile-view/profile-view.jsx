import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { UserInfo } from './user-info';
import { FavoriteMovies } from './favorite-movies';
import { UpdateUser } from './update-user';

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
      <UserInfo name={user.Username} email={user.Email} />
      <FavoriteMovies favoriteMovieList={favoriteMovieList} />
      <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
    </div>
  );
};
