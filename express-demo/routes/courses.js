import express from "express";
import Joi from "joi";
const router = express.Router();

const courses = [
  { id: 1, name: "curso1" },
  { id: 2, name: "curso2" },
  { id: 3, name: "curso3" },
];

router.get("/", (req, res) => {
  res.send(courses);
});

router.get("/:id", (req, res) => {
  const course = courses.find((el) => el.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("Course with given ID not found");
  } else {
    res.send(course);
  }
});

// app.get("/api/posts/:year/:month", (req, res) => {
//   res.send(req.query); //query é usado para ler parametros opcionais, que sao passados na url por ?
//   // Ex.: http://localhost:3000/api/posts/2021/1?sortBy=name
// });

router.post("/", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) {
    // 400 = Bad Request
    return res.status(400).send(error.details[0].message);
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  const course = courses.find((el) => el.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("Course with given ID not found");
  }

  const { error } = validateCourse(req.body);
  if (error) {
    // 400 = Bad Request
    return res.status(400).send(error.details[0].message);
  }

  course.name = req.body.name;
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const course = courses.find((el) => el.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("Course with given ID not found");
  }

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

const validateCourse = (course) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
};

export default router;
