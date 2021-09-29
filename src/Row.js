import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  //   console.log(movies);

  return (
    <Router className="row">
      {/* <h2>{title}</h2> */}
      <Link to="/movie/:id" className="row__posters">
        {movies.map((movie) => (
          <div className="movie__details">
            <img
              key={movie.id}
              className="row__poster"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie__info">
              {/* <h3>{movie.title}</h3> */}
              <span className="ratings">⭐{movie.vote_average}</span>
            </div>
          </div>
        ))}
      </Link>
    </Router>
  );
}

export default Row;
