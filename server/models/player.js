import mongoose from "mongoose";

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: Number, //TODO: Check if it would be a number or what
    required: false,
  },
  stats: {
    numberOfGamesWon: {
      type: Number,
      required: false,
    },
    numberOfGamesPlayed: {
      type: Number,
      required: false,
    },
  },
});

export default mongoose.model("Player", playerSchema);
