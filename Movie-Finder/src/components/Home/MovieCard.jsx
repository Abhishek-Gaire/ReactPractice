/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
export default function MovieCard({ movie, from }) {
  let type;
  const navigate = useNavigate();
  if (from === "movie") {
    type = "movie";
  } else if (from === "tv") {
    type = "tv";
  }
  const goToDetails = (movie) => {
    navigate(`/details/${movie.id}?type=${type}`);
  };
  return (
    <div className="card" id={movie.id}>
      <figure onClick={() => goToDetails(movie)}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="overlay">
          <div className="content">
            <p>{movie.overview}</p>
          </div>
        </div>
      </figure>
      <span className="movie-rating">⭐{movie.vote_average}</span>
      <h3 className="movie-title">{movie.title || movie.name}</h3>
    </div>
  );
}
