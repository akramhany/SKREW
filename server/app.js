import express from "express";
import dotenv from "dotenv";
import { connectToCluster } from "./utils/database.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

connectToCluster(process.env.MONGODB_URI, (mongoClient) => {
  console.log(mongoClient);
  app.listen(PORT);
})
  .then((result) => {
    console.log("Connection is done");
  })
  .catch((err) => {
    console.log(err);
  });
