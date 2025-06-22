import React, { useState } from "react";
import PropTypes from "prop-types";
import Debounce from "../hooks/Debounce";
import "../styles/SearchBar.css";

const SearchBar = ({ setMovies }) => {
  const [query, setQuery] = useState("");

  const debouncedQuery = Debounce(query, 500);

  const fetchMovies = async (searchTerm) => {
    if (!searchTerm) {
      setMovies([]);
      return;
    }
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=4a3b711b`
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search.slice(0, 10));
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  React.useEffect(() => {
    fetchMovies(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  setMovies: PropTypes.func.isRequired,
};

export default SearchBar;
