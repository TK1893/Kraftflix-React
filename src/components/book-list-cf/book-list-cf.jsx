import { useState } from 'react';

export const BookListCF = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Eloquent JavaScript' },
    { id: 2, title: 'Mastering JavaScript Functional Programming' },
    { id: 3, title: 'JavaScript: The Good Parts' },
    { id: 4, title: 'JavaScript: The Definitive Guide' },
    { id: 5, title: 'The Road to React' },
  ]);

  // Zweite Variante *******************************************
  if (books.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      <h1>Komponente: BookListCF</h1>
      {books.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

// Ursprungsvariante statische Liste ********************************
// export const BookList = () => {
//   return (
//     <div>
//       <h1>Komponente: BookList</h1>
//       <div>Eloquent JavaScript</div>
//       <div>Mastering JavaScript Functional Programming</div>
//       <div>JavaScript: The Good Parts</div>
//       <div>JavaScript: The Definitive Guide</div>
//       <div>The Road to React</div>
//       <button>Test</button>
//     </div>
//   );
// };
