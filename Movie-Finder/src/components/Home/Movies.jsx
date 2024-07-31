import { useEffect, useState } from "react";

const API_KEY = "api_key=8c72c95a59121aae424474da628b54d2";

function Movies() {
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/now_playing?${API_KEY}`;

  useEffect(() => {
    async function fetchInformation() {
      const response = await fetch(`${url}`);
      const data = await response.json();
      // console.log(data)
      setMovies(data.results);
    }
    fetchInformation();
  }, [url]);
  return (
    <section className="container">
      <h2>Latest Movies</h2>
      {/* {One Function Needed For Hover in this Div} */}
      <div className="movies-container" id="latestContainer">
        <button className="btn-cont left">
          <i className="bx bx-chevron-left"></i>
        </button>
        <button className="btn-cont right">
          <i className="bx bx-chevron-right"></i>
        </button>
        {movies.forEach((movie) => {
          console.log(movie.title);

          <div className="card" id={movie.id}>
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w500/+${movie.poster_path}`}
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
          </div>;
        })}
      </div>
    </section>
  );
}

export default Movies;
