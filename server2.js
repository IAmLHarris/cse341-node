const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

app.set("views", path.join(__dirname, "/public/views"));

app.set("view engine", "ejs");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/home", (req, res) => {
  res.send("Hello World, This is home router");
});

router.get("/profile", (req, res) => {
  res.send("Hello World, This is profile router");
});

router.get("/scared", (req, res) => {
  res.send("i am very worried");
});

router.get("/curious/:id", (req, res, next) => {
  res.render("test", { output: req.params.id });
});

router.get("/login", (req, res) => {
  res.send("Hello World, This is login router");
});

router.get("/logout", (req, res) => {
  res.send("Hello World, This is logout router");
});

app.use("/", router);

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});
app.use((err, req, res, next) => {
  res.status(500).send("Something broke!", { Error: err.stack });
});

// app.use(function (err, req, res, next) {
//   console.log(err.stack);
//   res.status(404).send("Couldn't find that page :/");
// });

app.listen(process.env.port || 3000);

console.log("Web Server is listening at port " + (process.env.port || 3000));
