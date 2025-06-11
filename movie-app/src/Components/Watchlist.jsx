import React from "react";
import PropTypes from "prop-types";
import "../styles/Watchlist.css";

const Watchlist = ({ watchlist, setWatchlist }) => {
  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((movie) => movie.imdbID !== id));
  };

  return (
    <div className="watchlist">
      <h2>Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in watchlist</p>
      ) : (
        watchlist.map((movie) => (
          <div key={movie.imdbID} className="watchlist-item">
            <span>
              {movie.Title} ({movie.Year})
            </span>
            <button onClick={() => removeFromWatchlist(movie.imdbID)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

Watchlist.propTypes = {
  watchlist: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      Poster: PropTypes.string,
    })
  ).isRequired,
  setWatchlist: PropTypes.func.isRequired,
};

export default Watchlist;
