// Import dependencies
const express = require("express");
const router = express.Router();
const axios = require("axios");

// Load Game model
const Game = require("../../models/Game");
const User = require("../../models/User");

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

router.get("/saved", (req, res) => {
  User.findOne({
    _id: "60a3271d674fa54b885fc188",
  })
    .aggregate("games")
    .exec()
    .then((data) => {
      console.log(data);
      res.json(data.games);
    })
    .catch((err) => res.json(err));
});

router.post("/searchDB", (req, res) => {
  // console.log("POST to searchDB...", req.body);

  Game.create({
    photo: req.body.background_image,
    title: req.body.name,
    releaseDate: req.body.released,
    genre: req.body.genres,
    platform: req.body.platforms,
    purchasePrice: req.body.score,
  })
    .then((newGame) => {
      console.log(newGame);
      return User.updateOne(
        { _id: "60a3271d674fa54b885fc188" },
        { $addToSet: { games: newGame._id } }
      );
    })
    .then((data) => res.json(data))
    .catch((err) => res.status(422).json(err));
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
