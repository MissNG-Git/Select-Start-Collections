const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  photo: { type: String },
  title: { type: String, required: true },
  releaseDate: { type: Date },
  genre: { type: String },
  platform: { type: String },
  synopsis: String,
  developer: { type: String },
  publisher: { type: String },
  purchasePrice: { type: Number },
  // dateAdded: { type: Date, default: Date.now, required: true },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
