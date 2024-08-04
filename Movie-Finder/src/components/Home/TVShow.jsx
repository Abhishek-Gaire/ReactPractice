import { useEffect, useState } from "react";

import MovieContainer from "./MovieContainer";
const API_KEY = "api_key=8c72c95a59121aae424474da628b54d2";
function TVShow() {
  const [shows, setShows] = useState([]);
  const url = `https://api.themoviedb.org/3/discover/tv?${API_KEY}`;
  useEffect(() => {
    async function fetchShows() {
      const response = await fetch(`${url}`);
      const data = await response.json();
      setShows(data.results);
    }
    fetchShows();
  }, [url]);
  return (
    <section className="container tv">
      <h2>Latest TV Show</h2>
      <MovieContainer movies={shows} from={"tv"} />
    </section>
  );
}

export default TVShow;
