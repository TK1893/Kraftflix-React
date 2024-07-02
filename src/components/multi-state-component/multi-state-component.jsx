import { useState } from 'react';

export const MultiStateComponent = () => {
  const [name, setName] = useState('John');
  const [age, setAge] = useState(30);

  return (
    <div>
      <h1>Komponente MultiStateComponent</h1>
      <p>Name: {name}</p>
      <p>Alter: {age}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
  );
};
