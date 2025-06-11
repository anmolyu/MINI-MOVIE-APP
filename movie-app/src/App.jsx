import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SearchBar from "./Components/SearchBar";
import MoviePoster from "./Components/MoviePoster";
import Watchlist from "./Components/Watchlist";
import "./styles/App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem("watchlist");
    return saved ? JSON.parse(saved) : [];
  });

  // Persist watchlist to localStorage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    if (!watchlist.some((item) => item.imdbID === movie.imdbID)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <div className="app">
      <h1 className="Mini">Mini Movie Explorer</h1>
      <SearchBar setMovies={setMovies} />
      <div className="content">
        <div className="movies">
          {movies.map((movie) => (
            <MoviePoster
              key={movie.imdbID}
              movie={movie}
              addToWatchlist={addToWatchlist}
            />
          ))}
        </div>
        <Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />
      </div>
    </div>
  );
};

App.propTypes = {
  movies: PropTypes.array,
  watchlist: PropTypes.array,
  setMovies: PropTypes.func,
  setWatchlist: PropTypes.func,
  addToWatchlist: PropTypes.func,
};

export default App;
