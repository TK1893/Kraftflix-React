import React from 'react';
import { useState, useEffect } from 'react';

import { Greeting } from '../greeting/greeting';
import { Counter } from '../counter/counter';
import { MultiStateComponent } from '../multi-state-component/multi-state-component';
import { BookList } from '../book-list/book-list';
import { BookListCF } from '../book-list-cf/book-list-cf';
import { EreignisKlick } from '../ereignis-klick/ereignis-klick';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('https://kraftflix-api-d019e99d109c.herokuapp.com/movies')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data fetched from API : ', data);
        const moviesFromApi = data.map((item) => {
          return {
            actors: item.Actors,
            description: item.Description,
            director: item.Director,
            featured: item.Featured,
            genre: item.Genre,
            image: item.Imageurl,
            title: item.Title,
            year: item.Year,
            id: item._id,
          };
        });
        setMovies(moviesFromApi);
      });
  }, []);
  console.log('neuer state movies', movies);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <>
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        ))}
      </div>

      {/* weitere Komponenten ************************************************************** */}
      {/* <div>
        <h1>Komponente: Greeting</h1>
        <Greeting name="Alice" attraction="bescheiden" />
        <Greeting name="Bob" attraction="sexy" />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <MultiStateComponent />
      </div>
      <BookList />
      <BookListCF />
      <EreignisKlick /> */}
      {/* ********************************************************************************* */}
    </>
  );
};
