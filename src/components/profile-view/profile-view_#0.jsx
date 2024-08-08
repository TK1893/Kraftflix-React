import React, { useEffect, useState } from 'react';
import './profile-view.scss';

export const ProfileView = ({ user, token }) => {
  console.log('user:', user);
  const formattedBirthdate = new Date(user.Birthdate)
    .toISOString()
    .split('T')[0];

  return (
    <>
      <div>
        <h1>User Info </h1>
        <div>{`Username: ${user.Username}`}</div>
        <div>{`Email: ${user.Email}`}</div>
        <div>{`Bithdate: ${formattedBirthdate}`}</div>
        <div>{`ID: ${user._id}`}</div>
        <div>{`Password: ${user.Password}`}</div>
        <div>{`FavMovies: ${user.FavoriteMovies[0]}`}</div>
      </div>
    </>
  );
};
