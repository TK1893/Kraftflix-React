import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './movie-view.scss';

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((item) => item._id === movieId);

  return (
    <div className="mv-container">
      <div>
        <img src={movie.Imageurl} className="w-100" />
      </div>
      <div>
        <span>Title:</span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Year:</span>
        <span>{movie.Year}</span>
      </div>
      <div>
        <span>Genre:</span>
        <span>{movie.Genre.Name}</span>
      </div>
      <div>
        <span>Plot:</span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Actors:</span>
        <span> {movie.Actors.join(', ')}</span>
      </div>
      <div>
        <span>Director:</span>
        <span>{movie.Director.Name}</span>
        <span>Biography:</span>
        <span>{movie.Director.Bio}</span>
      </div>

      <div>
        <span>Featured:</span>
        <span>{movie.Featured ? 'Yes' : 'No'}</span>
      </div>
      <div>
        <span>ID:</span>
        <span>{movie._id}</span>
      </div>
      <Link to={'/'}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};
