import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
const API_KEY = "api_key=8c72c95a59121aae424474da628b54d2";
function Trending() {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const url = `https://api.themoviedb.org/3/trending/all/day?${API_KEY}`;

  useEffect(() => {
    async function fetchInformation() {
      // setIsLoading(true);
      // console.log(isLoading);
      const response = await fetch(`${url}`);
      const data = await response.json();
      setMovies(data.results);
      // setIsLoading(false);
    }
    fetchInformation();
  }, [url]);
  return (
    <section className="container trending">
      <h2>Trending Today</h2>
      {/* {One Function Needed For Hover in this Div} */}
      <div className="movies-container" id="trendingContainer">
        <button className="btn-cont left">
          <i className="bx bx-chevron-left"></i>
        </button>
        <button className="btn-cont right">
          <i className="bx bx-chevron-right"></i>
        </button>
        {movies.map((movie) => {
          return (
            <MovieCard movie={movie} key={movie.id} from={movie.media_type} />
          );
        })}
      </div>
    </section>
  );
}

export default Trending;
