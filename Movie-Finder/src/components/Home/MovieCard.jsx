/* eslint-disable react/prop-types */
export default function MovieCard({ movie }) {
  return (
    <div className="card" id={movie.id}>
      <figure>
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
      <h3 className="movie-title">{movie.title}</h3>
    </div>
  );
}
