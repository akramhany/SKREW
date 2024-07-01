import express from "express";
import dotenv from "dotenv";
import Database from "./utils/database.js";
import Product from "./models/products.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

const db = new Database(process.env.MONGODB_URI, {
  dbName: "test",
});

process.on("SIGINT", async () => {
  try {
    await db.disconnect();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

db.connect().then((res) => {
  app.listen(PORT);
});
