// Import dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create GameSchema
const GameSchema = new Schema({
  photo: { type: String },
  title: { type: String, required: true },
  releaseDate: { type: Date },
  genre: [{ type: String }],
  platform: [{ type: Object }, [{ id: Number, name: String, slug: String }]],
  //   synopsis: String,
  //   developer: { type: String },
  //   publisher: { type: String },
  purchasePrice: { type: Number },
  dateAdded: { type: Date, default: Date.now, required: true },
});

// Export the model
module.exports = GameGame = mongoose.model("games", GameSchema);
