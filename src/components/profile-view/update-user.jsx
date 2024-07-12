import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const UpdateUser = (handleSubmit, handleUpdate) => {
  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          defaultValue={user.Username}
          onChange={(e) => handleUpdate(e)}
          required
          minLength="3"
          placeholder="Enter a username - min 3 characters"
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          defaultValue=""
          onChange={(e) => handleUpdate(e)}
          required
          minLength="8"
          placeholder="Enter a password - min 8 characters"
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email: </Form.Label>
        <Form.Control
          type="email"
          defaultValue={user.Email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={handleSubmit}
        className="my-3"
      >
        Submit
      </Button>
    </Form>
  );
};

// <form className="profile-form" onSubmit={(e) => handleSubmit(e)}>
//   <h4>Update User Data</h4>
//   <label>Username:</label>
//   <input

//   />
//   <label>Password</label>
//   <input
//     type="password"
//     name="Password"
//     defaultValue={user.Password}
//     onChange={(e) => handleUpdate(e)}
//   />
//   <label>Email adress</label>
//   <input
//     type="email"
//     name="email"
//     defaultValue={user.Email}
//     onChange={(e) => handleUpdate(e.target.value)}
//   />
//   <button variant="primary" type="submit">
//     Update
//   </button>
// </form>
