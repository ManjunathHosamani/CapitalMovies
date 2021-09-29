import React from "react";
import "./Nav.css";
import { BrowserRouter as Link, useHistory } from "react-router-dom";

function Nav() {
  const history = useHistory();
  const redirectPopular = () => {
    history.push("/discover/popular");
  };
  const redirectLatest = () => {
    history.push("/discover/latest");
  };
  const redirectHome = () => {
    history.push("/discover");
  };
  const redirectLogin = () => {
    history.push("/login");
  };
  return (
    <div className="nav">
      <Link to="/discover">
        <img
          src="https://st4.depositphotos.com/3096625/23071/v/600/depositphotos_230717380-stock-illustration-initial-logo-monogram-letters-together.jpg"
          alt="logo"
          className="nav__logo"
          onClick={redirectHome}
        />
      </Link>

      <button className="buttons" onClick={redirectPopular}>
        Popular Movies
      </button>
      <button className="buttons" onClick={redirectLatest}>
        Latest Movies
      </button>
      <button className="buttons" onClick={redirectLogin}>
        Login in
      </button>
    </div>
  );
}

export default Nav;
