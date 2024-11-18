import dotenv from "dotenv";
import bunyan from "bunyan";
dotenv.config();
console.log(process.env.PORT);
class Config {
  PORT;
  DB_URI;
  constructor() {
    this.PORT = process.env.PORT || 3000;
    this.DB_URI = process.env.DB_URI || "";
  }
  validateConfig() {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined || value === "") {
        throw new Error(`Invalid configuration: ${key} is not set`);
      }
    }
  }
  createLogger(name) {
    return bunyan.createLogger({ name, level: "debug" });
  }
}
const config = new Config();
export default config;
