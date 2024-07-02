export const BookView = ({ book, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={book.image} />
      </div>
      <div>
        <span>Title:</span>
        <span>{book.title}</span>
      </div>
      <div>
        <span>Autor:</span>
        <span>{book.author}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
