import mongoose from "mongoose";

const Schema = mongoose.Schema;

const deckSchema = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  cards: [
    {
      cardIndex: Number,
    },
  ],
});

export default mongoose.model("Deck", deckSchema);
