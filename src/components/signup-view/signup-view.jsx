import { useState } from 'react';

export const SignupView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Username:', username);
    // console.log('Password:', password);
    // console.log('Email:', email);
    // console.log('Birthdate:', birthdate);
    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthdate: birthdate,
    };
    fetch('https://kraftflix-api-d019e99d109c.herokuapp.com/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        alert('Signup successful');
        window.location.reload();
      } else {
        alert('Signup failed');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minlength="3"
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Birthdate:
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
