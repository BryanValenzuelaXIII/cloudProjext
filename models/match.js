const mongoose = require("mongoose");

const MatchSquema = mongoose.Schema(
  {
    day: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Match = mongoose.model("Match", MatchSquema);

module.exports = Match;
