import "./App.css";
import React from "react";
import Row from "./Row";
import requests from "./requests";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Banner from "./Banner";
import Nav from "./Nav";
import Login from "./Login";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/discover/popular">
              <Nav />
              <Banner fetchUrl={requests.fetchPopular} />
              <Row
                title="popular"
                fetchUrl={requests.fetchPopular}
                isLargeRow
              />
            </Route>
            <Route path="/discover/latest">
              <Nav />
              <Banner fetchUrl={requests.fetchTrending} />
              <Row
                title="latest"
                fetchUrl={requests.fetchTrending}
                isLargeRow
              />
            </Route>
            <Route path="/discover">
              <Nav />
              <Banner fetchUrl={requests.fetchPopular} />
              <Row
                title="popular"
                fetchUrl={requests.fetchPopular}
                isLargeRow
              />
              <Row
                title="popular"
                fetchUrl={requests.fetchTrending}
                isLargeRow
              />
              <Row title="latest" fetchUrl={requests.fetchLatest} isLargeRow />
            </Route>
            <Route path="/">
              <Redirect to="/discover" />
            </Route>
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
