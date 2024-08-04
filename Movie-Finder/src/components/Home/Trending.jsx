import { useEffect, useState } from "react";

import MovieContainer from "./MovieContainer";
const API_KEY = "api_key=8c72c95a59121aae424474da628b54d2";
function Trending() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = `https://api.themoviedb.org/3/trending/all/day?${API_KEY}`;

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
    <section className="container trending">
      <h2>Trending Today</h2>
      <MovieContainer movies={movies} />
    </section>
  );
}

export default Trending;
