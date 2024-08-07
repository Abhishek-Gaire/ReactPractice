import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/helper/Header";
import Loader from "../components/helper/Loader";
import MovieCard from "../components/Home/MovieCard";

const API_KEY = "api_key=8c72c95a59121aae424474da628b54d2";
function Section() {
  const { name } = useParams();
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let url;
  if (name === "movie") {
    url = `https://api.themoviedb.org/3/movie/now_playing?${API_KEY}`;
  } else if (name === "tv") {
    url = `https://api.themoviedb.org/3/discover/tv?${API_KEY}`;
  } else {
    url = `https://api.themoviedb.org/3/trending/all/day?${API_KEY}`;
  }
  useEffect(() => {
    async function fetchInformation() {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setCard(data.results);
      setIsLoading(false);
    }
    fetchInformation();
  }, [url]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <section className="container results">
              <div className="movies-container" id="searchResults">
                {card.map((c) => {
                  return <MovieCard key={c.id} movie={c} from={name} />;
                })}
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}

export default Section;
