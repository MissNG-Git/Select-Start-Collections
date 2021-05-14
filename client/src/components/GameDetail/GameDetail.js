import React from "react";

const GameDetail = (props) => {
  console.log(props);
  const { game } = props.location.gameProps;

  return (
    <div>
      <h1 className="game-title">{game.name}</h1>
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

export default GameDetail;
