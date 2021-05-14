import React from "react";
import { Link } from "react-router-dom";

const GameSearchResults = (props) => {
  console.log(props);
  return (
    <div className="results-container">
      <ul>
        {props.gameSearchResults.map((game) => (
          <li key={game.id}>
            <Link
              to={{
                pathname: `/browse/${game.name}`,
                gameProps: {
                  game: game,
                },
              }}
            >
              <h3>{game.name}</h3>
              {/* <img src={game.background_image} alt="game" /> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameSearchResults;
