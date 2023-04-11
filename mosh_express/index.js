import express from "express";
import genres from "./routes/genres.js";

const app = express();
app.use(express.json());
app.use("/api/genres", genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening port ${port}...`));
