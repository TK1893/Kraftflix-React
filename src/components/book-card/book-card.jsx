import React from 'react';

// export const BookCard = ({ book }) => {
//   return <div>{book.title}</div>;
// };

export const BookCard = ({ book, onBookClick }) => {
  return (
    <div
      onClick={() => {
        onBookClick(book);
      }}
    >
      {book.title}
    </div>
  );
};
