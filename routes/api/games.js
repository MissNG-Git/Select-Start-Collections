// Import dependencies
const express = require("express");
const router = express.Router();
const axios = require("axios");

// Load Game model
const Game = require("../../models/Game");

const gameSearchAPI = "https://rawg.io/api/games";
const apiKey = process.env.REACT_APP_RAWG_KEY;

// `${gameSearchAPI}${slug}&${apiKey}`;

// Browse GET endpoint
router.get("/browse", (req, res) => {
  console.log("browse for...", req.query.slug);
  axios({
    method: "get",
    url: gameSearchAPI,
    params: {
      search: req.query.slug,
      key: apiKey,
    },
  })
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => res.status(422).json(err));
});

// SearchDB GET endpoint
router.get("/searchDB", (req, res) => {
  console.log("searchDB for...", req.query.slug);
  axios({
    method: "get",
    url: gameSearchAPI,
    params: {
      search: req.query.slug,
      key: apiKey,
    },
  })
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => res.status(422).json(err));
});

router.post("/searchDB", (req, res) => {
  console.log("POST to searchDB...", req);
  // Game.findOne({
  //   title: req.body.title,
  // })
  //   .then((game) => {
  //     if (!game) {
  //       return res.status(400).json({ email: "Game could not be found :(" });
  //     } else {
  //       const newGame = new Game({
  //         title: req.body.title,
  //         releaseDate: req.body.release,
  //         genre: req.body.genre,
  //         platform: req.body.platform,
  //         synopsis: req.body.synopsis,
  //         developer: req.body.developer,
  //         publisher: req.body.publisher,
  //         price: req.body.price,
  //       });
  //     }
  //   })
  //   .catch((err) => res.status(422).json(err));
});

// Collection POST endpoint
router.get("/collection", (req, res) => {
  console.log("Collect GET!", req.body);
});

// Collection PUT(?) endpoint
router.put("/collection/:id", (req, res) => {
  console.log("Collect EDIT", req.params);

  // Game.findById({ _id: req.params.id })
  //   .then((game) => res.json(game))
  //   .catch((err) => res.status(422).json(err));
});

// Collection DELETE(?) endpoint
router.delete("/collection/:id", (req, res) => {
  console.log("Collect REMOVE", req.params);

  // Game.findById({ _id: req.params.id })
  //   .then((game) => game.remove())
  //   .then((game) => res.json(game))
  //   .catch((err) => res.status(422).json(err));
});

module.exports = router;
