import React from "react";
import { saveGame } from "../../utils/game-api";

const GameDetailLoggedIn = (props) => {
  console.log(props);
  const { game } = props.location.gameProps;

  const saveGameFunc = () => {
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
    saveGame(savedGame);
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div>
      <h1 className="game-title">{game.name}</h1>
      <button onClick={saveGameFunc}>Save</button>

      <p className="game-meta">Released: {game.released}</p>
      <p className="game-meta">MetaCritic: {game.metacritic}</p>
      {/* <p className="game-meta">User Rating: {game.rating}</p> */}
      <p className="game-meta">
        Ratings:
        {game.ratings.map((r) => `${r.title} ${r.percent}% | `)}
      </p>
      <h3 className="game-heading">Genre(s):</h3>
      {game.genres.map((g) => `${g.name} | `)}

      <h3 className="game-heading">Platform(s):</h3>
      {game.platforms.map((p) => `${p.platform.name} | `)}

      <ul>
        {game.short_screenshots.map((ss) => (
          <li key={ss.id}>
            <img
              src={ss.image}
              alt="game screenshot"
              className="game-screenshot"
            ></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameDetailLoggedIn;
