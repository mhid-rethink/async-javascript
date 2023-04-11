import express from "express";
import Joi from "joi";
import items from "../itemsArray.js";
const router = express.Router();

router.get("/", (request, response) => {
  response.send(items);
});

router.get("/:id", (request, response) => {
  const item = items.find(
    (element) => element.id === parseInt(request.params.id)
  );

  if (!item) {
    return response.status(404).send("Game Not Found");
  }
  response.send(item);
});

router.post("/", (request, response) => {
  const { error } = validateItemPost(request.body);
  if (error) {
    return response.status(400).send(error.details[0]);
  }

  const item = {
    id: items.length + 1,
    name: request.body.name,
    price: request.body.price,
  };

  items.push(item);
  response.send(item);
});

router.patch("/:id", (request, response) => {
  const item = items.find(
    (element) => element.id === parseInt(request.params.id)
  );
  if (!item) {
    return response.status(404).send("Game Not Found");
  }

  const { error } = validateItemPut(request.body);
  if (error) {
    return response.status(400).send(error.details[0].message);
  }

  if (request.body.name) {
    item.name = request.body.name;
  }
  if (request.body.price) {
    item.price = request.body.price;
  }

  response.send(item);
});

router.delete("/:id", (request, response) => {
  const item = items.find(
    (element) => element.id === parseInt(request.params.id)
  );
  if (!item) {
    return response.status(404).send("Game Not Found");
  }

  const index = items.indexOf(item);
  items.splice(index, 1);
  response.send(item);
});

const validateItemPost = (item) => {
  const schema = {
    name: Joi.string().min(3).required(),
    price: Joi.number().required(),
  };
  return Joi.validate(item, schema);
};

const validateItemPut = (item) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
    price: Joi.number(),
  }).or("name", "price");
  return Joi.validate(item, schema);
};

export default router;
