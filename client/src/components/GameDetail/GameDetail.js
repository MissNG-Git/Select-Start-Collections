import React from "react";
import { Link } from "react-router-dom";

const GameDetail = (props) => {
  console.log(props);
  const { game } = props.location.gameProps;

  return (
    <div style={{ height: "75vh" }} className="container">
      <div className="row">
        <div className="col s12 center-align">
          <div className="col s3">
            <Link to="/browse" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              browse
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
          <div className="details-wrapper">
            <h2 className="game-title">{game.name}</h2>
            <p className=" game-meta">Released: {game.released}</p>
            <p className="game-meta">MetaCritic: {game.metacritic}</p>
            {/* <p className="game-meta">User Rating: {game.rating}</p> */}
            <p className="game-meta">
              Ratings: {game.ratings.map((r) => `${r.title} ${r.percent}% | `)}
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
  );
};

export default GameDetail;
