import React from "react";
import { Link } from "react-router-dom";

const GameSearchResults = (props) => {
  console.log(props);
  return (
    <div style={{ height: "75vh" }} className="search-results-div container">
      <div className="row">
        <div className="col s12 center-align">
          <ul className="search-results-ul">
            {props.gameSearchResults.map((game) => (
              <li key={game.id} className="search-results-li">
                <Link
                  to={{
                    pathname: `/browse/${game.name}`,
                    gameProps: {
                      game: game,
                    },
                  }}
                >
                  <h5>{game.name}</h5>
                  {/* <img src={game.background_image} alt="game" /> */}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameSearchResults;
