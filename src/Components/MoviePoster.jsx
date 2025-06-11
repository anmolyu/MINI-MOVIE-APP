import React from "react";
import PropTypes from "prop-types";
import "../styles/MoviePoster.css";

const MoviePoster = ({ movie, addToWatchlist }) => {
  return (
    <div className="movie-card">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/150"
        }
        alt={movie.Title}
      />
      <br></br>
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={() => addToWatchlist(movie)}>＋ Watchlist</button>
    </div>
  );
};

MoviePoster.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string,
  }).isRequired,
  addToWatchlist: PropTypes.func.isRequired,
};

export default MoviePoster;
