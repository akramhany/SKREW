import mongoose from "mongoose";

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  currentPlayers: [
    {
      playerId: {
        type: Schema.Types.ObjectId,
        ref: "Player",
        required: true,
      },
      score: {
        type: Number,
        default: 0,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Game", gameSchema);
