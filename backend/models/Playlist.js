const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  userId: String,
  name: String,
  songs: [String],
});

module.exports = mongoose.model("Playlist", playlistSchema);
