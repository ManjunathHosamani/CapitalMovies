import { GoogleOutlined } from "@ant-design/icons";
import "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/auth";
import firebase from "firebase/compat/app";
import { auth } from "./firebase";
import "./Login.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original";

const Login = (fetchUrl) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=f17131439e567dc87764bfc8daab7621&language=en-US"
      );
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div id="login-page">
      <div id="login-card">
        <img
          src="https://st4.depositphotos.com/3096625/23071/v/600/depositphotos_230717380-stock-illustration-initial-logo-monogram-letters-together.jpg"
          alt="icon"
          height="100"
          max-width="100"
        />

        <h2>Capital Movies</h2>
        <br />

        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined />
          {` Login in with Google`}
        </div>
      </div>
      <div className="movie__posters">
        {movies.map((movie) => (
          <div className="movie__details">
            <img
              key={movie.id}
              className="row__poster"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;
