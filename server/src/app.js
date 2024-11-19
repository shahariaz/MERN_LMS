import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import config from "./config.js";
import databaseConnection from "./setupDatabase.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
config.validateConfig();
//Routeing
import userRoutes from "./router/user.router.js";
app.use("/api/user", userRoutes);

app.listen(config.PORT, async () => {
  databaseConnection();
  console.log(`Server is running on port ${config.PORT}`);
});
