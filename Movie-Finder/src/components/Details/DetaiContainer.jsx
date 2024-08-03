/* eslint-disable react/prop-types */
function DetaiContainer({ content }) {
  console.log(content);
  return (
    <>
      <div className="background-img">
        <img
          src={`https://image.tmdb.org/t/p/original/${content.backdrop_path}`}
          alt=""
          id="background"
        />
      </div>
      <div className="detail-container">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/original/${content.poster_path}`}
            alt=""
            id="poster"
          />
        </figure>
        <div className="info">
          <h1 id="title">
            {content.name || content.title || content.original_name}
          </h1>
          <p id="rating">
            ⭐<span id="ratingVal">{content.vote_average || "N/A"}</span>
            <span id="ratingQty">({content.vote_count})</span>
          </p>
          <section className="type-genre">
            <div id="type" className="type"></div>
            <div id="genre"></div>
          </section>
          <div className="overview-container">
            <h2>Overview</h2>
            <p id="overview" className="active">
              {content.overview}
            </p>
            <button id="readMore">Read More</button>
          </div>
          <section className="extra-details">
            <table id="detailTable">
              <tr>
                <th>Creator</th>
                <td id="creator">&quot; N/A &quot; </td>
              </tr>
              <tr>
                <th>Stars</th>
                <td id="stars"></td>
              </tr>

              <tr id="relContainer">
                <th>Release Date</th>
                <td id="releaseDate">{content.release_date}</td>
              </tr>
            </table>
          </section>
        </div>
      </div>
    </>
  );
}

export default DetaiContainer;
