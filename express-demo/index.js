import Joi from "joi";
import express, { response } from "express";
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "curso1" },
  { id: 2, name: "curso2" },
  { id: 3, name: "curso3" },
];

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
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

app.post("/api/courses", (req, res) => {
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

app.put("/api/courses/:id", (req, res) => {
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

app.delete("/api/courses/:id", (req, res) => {
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
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening port ${port}...`));
