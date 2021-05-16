import React, { useState } from "react";
import Sidebar from "../layout/Sidebar";
import GameSearchResLoggedIn from "../gameSearchResLoggedIn/GameSearchResLoggedIn";

export default function SearchDatabase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gameSearchResults, setGameSearchResults] = useState([]);
  const gameSearchAPI = "https://rawg.io/api/games?search=";
  const apiKey = process.env.REACT_APP_RAWG_KEY;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let slug = searchTerm.split(" ").join("-").toLowerCase();

    setGameSearchResults([]);
    fetch(`${gameSearchAPI}${slug}&${apiKey}`)
      .then((res) => res.json(console.log(res)))
      .then(({ results }) => {
        results === undefined
          ? alert("no games found")
          : setGameSearchResults(results);
      });
    setSearchTerm("");
  };

  return (
    <div>
      <Sidebar />
      <div style={{ height: "75vh" }} className="container">
        <div className="row">
          <div className="col s12 center-align">
            <div className="database-wrapper">
              <h2>Search the Database!</h2>

              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleChange}
                  placeholder="Enter the title of a game you'd like to add!"
                />{" "}
                <input
                  type="submit"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                  }}
                  className="btn btn-small waves-effect waves-light hoverable green lighten-1"
                />
              </form>
              <br />
              <div className="row">
                <GameSearchResLoggedIn gameSearchResults={gameSearchResults} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
