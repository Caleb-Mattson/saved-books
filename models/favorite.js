const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  plot: {type: String},
  image: {type: String},
  link: {type: String, required: true},
  saved: {type: Boolean, default: false},
  date: { type: Date, default: Date.now }
});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite;