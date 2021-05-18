// Import dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create GameSchema
const GameSchema = new Schema({
  photo: { type: String },
  title: { type: String },
  releaseDate: { type: Date },
  genre: [{ id: Number, name: String, slug: String }],
  platform: [{ id: Number, name: String, slug: String }],
  //   synopsis: String,
  //   developer: { type: String },
  //   publisher: { type: String },
  purchasePrice: { type: Number },
  dateAdded: { type: Date, default: Date.now },
});

// Export the model
module.exports = Game = mongoose.model("games", GameSchema);
