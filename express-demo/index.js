import express, { response } from "express";
import { logger } from "./middleware/logger.js";
import helmet from "helmet";
import morgan from "morgan";
import config from "config";
import courses from "./routes/courses.js";
import home from "./routes/home.js";
const app = express();

app.set("view engine", "pug");
app.set("views", "./views"); //param opicional e ./views é o default

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use("/api/courses", courses);
app.use("/", home);

//Configuration
console.log(`Application name: ${config.get("name")}`);
console.log(`Application mail: ${config.get("mail.host")}`);
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan enabled...");
}

app.use(logger);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening port ${port}...`));
