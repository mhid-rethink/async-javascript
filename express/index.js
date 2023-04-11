import express from "express";
import items from "./routes/items.js";

const app = express();
app.use(express.json());
app.use("/api/items", items);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
