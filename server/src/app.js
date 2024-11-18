import express from "express";
import dotenv from "dotenv";
import config from "./config.js";
import databaseConnection from "./setupDatabase.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
config.validateConfig();
app.listen(config.PORT, async () => {
  databaseConnection();
  console.log(`Server is running on port ${config.PORT}`);
});
