import React, { useState } from "react";
import { Link } from "react-router-dom";
import GameSearchResults from "../gameSearchResults/GameSearchResults";

export default function Database() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gameSearchResults, setGameSearchResults] = useState([]);
  const localHost = window.location.hostname.contains("localhost")
    ? "http://localhost:8000/api/games"
    : "";
  // const gameSearchAPI = "https://rawg.io/api/games?search=";
  // const apiKey = process.env.REACT_APP_RAWG_KEY;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let slug = searchTerm.split(" ").join("-").toLowerCase();

    setGameSearchResults([]);
    fetch(`${localHost}/browse?` + new URLSearchParams({ slug }))
      .then((res) => res.json(console.log(res)))
      .then(({ results }) => {
        results === undefined
          ? alert("no games found")
          : setGameSearchResults(results);
      });
    setSearchTerm("");
  };

  return (
    <div style={{ height: "75vh" }} className="search container">
      <div className="row">
        <div className="col s12 center-align">
          <div className="col s3">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
          </div>
          <span className="col s6"></span>
          <div className="col s3">
            <p className="grey-text text-darken-1">
              <Link to="/login">Log in</Link> <b>|</b>{" "}
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col s12 center-align">
          <div className="database-wrapper">
            <h2>Browse Game Database</h2>
            <p className="flow-text grey-text text-darken-1">
              Enter the name of a game to confirm it's in our database!
            </p>

            <form onSubmit={onSubmit}>
              <input type="text" value={searchTerm} onChange={handleChange} />{" "}
              <input
                type="submit"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable green lighten-1"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        <GameSearchResults gameSearchResults={gameSearchResults} />
      </div>
    </div>
  );
}
