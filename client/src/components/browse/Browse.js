import React, { useState } from "react";
// import { Link } from "react-router-dom";
import GameSearchResults from "../gameSearchResults/GameSearchResults";

export default function Database() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gameSearchResults, setGameSearchResults] = useState([]);
  const gameSearchAPI = "https://rawg.io/api/games?search=";
  const apiKey = "key=3b96da0f20114e6aaf6688888e201fa5";

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
    <div className="database-wrapper">
      <h2>Browse Game Database</h2>
      <p>Enter the name of a game to confirm it's in our database!</p>

      <form onSubmit={onSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />{" "}
        <input type="submit" />
      </form>
      <GameSearchResults gameSearchResults={gameSearchResults} />
    </div>
  );
}