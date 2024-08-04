import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/helper/Header";
import Loader from "../components//helper/Loader";
import SearchedMovie from "../components/SearchedMovie";

function SearchPage() {
  const MOVIE_SEARCH_URL =
    "https://api.themoviedb.org/3/search/multi?&language=en-US&api_key=8c72c95a59121aae424474da628b54d2";
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchItem = queryParams.get("searchItem");

  const [searchedMovie, setSearchedMovie] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch(`${MOVIE_SEARCH_URL}&query=${searchItem}`);
      const data = await res.json();
      if (data.results.length === 0) {
        setError(true);
      }
      setSearchedMovie(data.results);
      setIsLoading(false);
    }
    fetchData();
  }, [searchItem]);
  return (
    <>
      {error && <h1 className="errMsg">Sorry No results Found</h1>}

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <SearchedMovie movieDetails={searchedMovie} searchItem={searchItem} />
        </>
      )}
    </>
  );
}

export default SearchPage;
