/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import Loader from "../helper/Loader";
import MovieContainer from "./MovieContainer";
const API_KEY = "api_key=8c72c95a59121aae424474da628b54d2";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = `https://api.themoviedb.org/3/movie/now_playing?${API_KEY}`;

  useEffect(() => {
    async function fetchInformation() {
      setIsLoading(true);
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
          <MovieContainer movies={movies} from={"movie"} />
        </section>
      )}
    </>
  );
}
export default Movies;
