// Here you import the PropTypes library
import React from 'react';
import PropTypes from 'prop-types';

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

// Hier werden alle Props- Beschränkungen für BookCard definiert
BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string,
  }).isRequired,
  onBookClick: PropTypes.func.isRequired,
};
