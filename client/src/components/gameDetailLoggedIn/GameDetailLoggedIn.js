import React from "react";
import Sidebar from "../layout/Sidebar";
import gameApi from "../../utils/gameApi";

const GameDetailLoggedIn = (props) => {
  console.log(props);
  const { game } = props.location.gameProps;

  const addToCollection = () => {
    const savedGame = {
      photo: game.background_image,
      title: game.name,
      releaseDate: game.released,
      genre: game.genres || [],
      platform: game.platforms.map(({ platform }) => {
        const obj = { ...platform };
        return obj;
      }),
      // synopsis: ,
      // developer:,
      // publisher: ,
      purchasePrice: parseInt(game.score).toFixed(2),
    };
    console.log(game);
    gameApi.saveGame(savedGame);
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div>
      <Sidebar />
      <div style={{ height: "75vh" }} className="container">
        <div className="row">
          <div className="col s12 center-align">
            <div className="details-wrapper">
              <h1 className="game-title">{game.name}</h1>
              <button
                style={{
                  width: "140px",
                  borderRadius: "15px",
                  letterSpacing: "1.5px",
                }}
                onClick={addToCollection}
              >
                Add to Collection
              </button>

              <p className="game-meta">Released: {game.released}</p>
              <p className="game-meta">MetaCritic: {game.metacritic}</p>
              {/* <p className="game-meta">User Rating: {game.rating}</p> */}
              <p className="game-meta">
                Ratings:{" "}
                {game.ratings.map((r) => `${r.title} ${r.percent}% | `)}
              </p>
              <h4 className="game-heading">Genre(s):</h4>
              {game.genres.map((g) => `${g.name} | `)}

              <h4 className="game-heading">Platform(s):</h4>
              {game.platforms.map((p) => `${p.platform.name} | `)}

              <ul className="game-details-ul">
                <h4 className="game-heading">Screenshot(s):</h4>
                {game.short_screenshots.map((ss) => (
                  <li
                    key={ss.id}
                    className="game-details-li"
                    style={{
                      display: "inline-block",
                    }}
                  >
                    <img
                      src={ss.image}
                      alt="game screenshot"
                      className="game-screenshot"
                      style={{
                        width: "25vh",
                        height: "25vh",
                        padding: "5px",
                        float: "left",
                        objectFit: "cover",
                      }}
                    ></img>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailLoggedIn;
