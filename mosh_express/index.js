import Joi from "joi";
import express from "express";

const app = express();
app.use(express.json());

const genres = [
  { id: 1, name: "Musical" },
  { id: 2, name: "Biography" },
  { id: 3, name: "Fantasy" },
  { id: 4, name: "Action" },
  { id: 5, name: "Sci-Fi" },
  { id: 6, name: "Horror" },
  { id: 7, name: "Romance" },
];

const validateGenre = (genre) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(genre, schema);
};

app.get("/api/genres", (request, response) => {
  response.send(genres);
});

app.get("/api/genres/:id", (request, response) => {
  const genre = genres.find(
    (element) => element.id === parseInt(request.params.id)
  );
  if (!genre) {
    return response.status(404).send("Genre not found.");
  }
  response.send(genre);
});

app.post("/api/genres", (request, response) => {
  const { error } = validateGenre(request.body);
  if (error) {
    return response.status(400).send(error);
  }

  const genre = {
    id: genres.length + 1,
    name: request.body.name,
  };
  genres.push(genre);
  response.send(genre);
});

app.put("/api/genres/:id", (request, response) => {
  const genre = genres.find(
    (element) => element.id === parseInt(request.params.id)
  );
  if (!genre) {
    return response.status(404).send("Genre not found.");
  }

  const { error } = validateGenre(request.body);
  if (error) {
    return response.status(400).send(error);
  }

  genre.name = request.body.name;
  response.send(genre);
});

app.delete("/api/genres/:id", (request, response) => {
  const genre = genres.find(
    (element) => element.id === parseInt(request.params.id)
  );
  if (!genre) {
    return response.status(404).send("Genre not found.");
  }

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  response.send(genre);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening port ${port}...`));
