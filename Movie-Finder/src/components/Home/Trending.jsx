function Trending() {
  return (
    <section className="container trending">
      <h2>Trending Today</h2>
      {/* {One Function Needed For Hover in this Div} */}
      <div className="movies-container" id="trendingContainer">
        <button className="btn-cont left">
          <i className="bx bx-chevron-left"></i>{" "}
        </button>
        <button className="btn-cont right">
          <i className="bx bx-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}

export default Trending;
