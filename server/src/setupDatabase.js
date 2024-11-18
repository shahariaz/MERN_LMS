import mongoose from "mongoose";
import config from "./config.js";

const log = config.createLogger("Database");
const databaseConnection = () => {
  const connect = async () => {
    try {
      await mongoose.connect(config.DB_URI);
      log.info("Database connected successfully");
    } catch (error) {
      log.error("Error connecting to database", error);
      return process.exit(1);
    }
  };
  connect();
  mongoose.connection.on("disconnected", connect);
};
export default databaseConnection;
