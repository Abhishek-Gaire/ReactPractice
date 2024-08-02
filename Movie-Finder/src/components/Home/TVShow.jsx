import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
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
  });
  return (
    <section className="container tv">
      <h2>Latest TVShow</h2>
      {/* {One Function Needed For Hover in this Div} */}
      <div className="movies-container" id="latestTVContainer">
        <button className="btn-cont left">
          <i className="bx bx-chevron-left"></i>{" "}
        </button>
        <button className="btn-cont right">
          <i className="bx bx-chevron-right"></i>
        </button>
      </div>
      {shows.map((show) => {
        return <MovieCard movie={show} key={show.id} />;
      })}
    </section>
  );
}

export default TVShow;
