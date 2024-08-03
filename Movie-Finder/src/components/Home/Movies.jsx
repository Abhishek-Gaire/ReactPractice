/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Loader from "../helper/Loader";
const API_KEY = "api_key=8c72c95a59121aae424474da628b54d2";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = `https://api.themoviedb.org/3/movie/now_playing?${API_KEY}`;

  useEffect(() => {
    async function fetchInformation() {
      setIsLoading(true);
      // console.log(isLoading);
      const response = await fetch(`${url}`);
      const data = await response.json();
      setMovies(data.results);
      setIsLoading(false);
    }
    fetchInformation();
  }, [url]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
            {movies.map((movie) => {
              return <MovieCard movie={movie} key={movie.id} from={"movie"} />;
            })}
          </div>
        </section>
      )}
    </>
  );
}
export default Movies;
