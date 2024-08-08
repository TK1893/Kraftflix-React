import React from 'react';
import PropTypes from 'prop-types';

export const UserInfo = ({
  name,
  email,
  birthdate,
  password,
  id,
  favMovies,
}) => {
  return (
    <>
      <p>Username: {name}</p>
      <p>Email: {email}</p>
      <p>Birthdate: {birthdate}</p>
      <p>Password: {password}</p>
      <p>Id: {id}</p>
      <p>Favorite Movies: {favMovies}</p>
    </>
  );
};

UserInfo.prototype = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
