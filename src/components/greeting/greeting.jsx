import React from 'react';

export const Greeting = (props) => {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>Du siehst {props.attraction} aus! </p>
    </div>
  );
};
