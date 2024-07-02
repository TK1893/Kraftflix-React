import { useState } from 'react';

export const BookList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Eloquent JavaScript' },
    { id: 2, title: 'Mastering JavaScript Functional Programming' },
    { id: 3, title: 'JavaScript: The Good Parts' },
    { id: 4, title: 'JavaScript: The Definitive Guide' },
    { id: 5, title: 'The Road to React' },
  ]);

  // State für ein neues Buch
  const [newBookTitle, setNewBookTitle] = useState('');

  //Formular-Submit-Handler
  const addBook = (event) => {
    event.preventDefault();
    if (newBookTitle.trim() === '') return;

    const newBook = {
      id: books.length + 1, // This is a simple way to generate a new id, but not ideal for production use
      title: newBookTitle,
    };

    setBooks([...books, newBook]);
    setNewBookTitle(''); // Clear the input field after adding
  };

  return (
    <div>
      <h1>Komponente: BookList</h1>
      <form onSubmit={addBook}>
        <input
          type="text"
          value={newBookTitle}
          onChange={(e) => setNewBookTitle(e.target.value)}
          placeholder="Enter book title"
        />
        <button type="submit">Add Book</button>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};
