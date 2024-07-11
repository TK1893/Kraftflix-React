import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './movie-view.scss';

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((item) => item.id === movieId);

  return (
    <div className="mv-container">
      <div>
        <img src={movie.image} className="w-100" />
      </div>
      <div>
        <span>Title:</span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Year:</span>
        <span>{movie.year}</span>
      </div>
      <div>
        <span>Genre:</span>
        <span>{movie.genre.Name}</span>
      </div>
      <div>
        <span>Plot:</span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span>Actors:</span>
        <span> {movie.actors.join(', ')}</span>
      </div>
      <div>
        <span>Director:</span>
        <span>{movie.director.Name}</span>
        <span>Biography:</span>
        <span>{movie.director.Bio}</span>
      </div>

      <div>
        <span>Featured:</span>
        <span>{movie.featured ? 'Yes' : 'No'}</span>
      </div>
      <div>
        <span>ID:</span>
        <span>{movie.id}</span>
      </div>
      <Link to={'/'}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};
