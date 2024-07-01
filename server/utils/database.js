import mongoose from "mongoose";

export default class Database {
  constructor(uri, options) {
    this.uri = uri;
    this.options = options;
  }

  async connect() {
    try {
      await mongoose.connect(this.uri, this.options);
      console.log(
        `Connected to database: ${mongoose.connection.db.databaseName}`,
      );
    } catch (err) {
      console.error("Connection to MongoDB Atlas failed!", err);
      process.exit();
    }
  }
  async disconnect() {
    try {
      await mongoose.disconnect();
      console.log(
        `Disconnected from database: ${mongoose.connection.db.databaseName}`,
      );
    } catch (err) {
      console.error("Disconnecting from MongoDB Atlas failed!", err);
      process.exit();
    }
  }
}
