import { config } from "dotenv";
import { connectToCluster } from "./utils/database.js";

config();
console.log(process.env.DB_URI);

connectToCluster(process.env.DB_URI)
  .then((result) => {
    console.log("Connection is done");
  })
  .catch((err) => {
    console.log(err);
  });
