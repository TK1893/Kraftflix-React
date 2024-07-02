import React from 'react';
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Komponente: Counter</h1>
      <p>Der aktuelle Zählerstand ist: {count}</p>
      <button onClick={() => setCount(count + 1)}>Erhöhe den Zähler</button>
    </div>
  );
};
