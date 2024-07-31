import Movies from "./Movies";
import Trending from "./Trending";
import TVShow from "./TVShow";

function Main() {
  return (
    <>
      <main>
        <Movies />
        <TVShow />
        <Trending />
      </main>
      {/* <section id="loader">
        <div className="loader-spinner"></div>
      </section> */}
    </>
  );
}

export default Main;
