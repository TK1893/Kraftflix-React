import React from 'react';

export const EreignisKlick = () => {
  const handleClick = () => {
    alert('Button geklickt!');
  };

  const handleClickZwei = (message) => {
    alert(message);
  };

  return (
    <div>
      <h1>Komponente EreignisKlick</h1>
      <button onClick={handleClick}>Klick mich!</button>
      <br />
      <br />
      <button onClick={() => handleClickZwei('Button geklickt!')}>
        Klick mich 2!
      </button>
    </div>
  );
};
