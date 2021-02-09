if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const flash = require("express-flash");

// ROUTES
const bilerRouter = require("../routes/biler");
const indexRouter = require("../routes/index");
const apiCarsRouter = require("../routes/api-cars");
const registerRouter = require("../routes/register");

// CONFIG

app.use(express.static(path.join(__dirname + "/../public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/../views"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(flash());

app.get("/", (req, res) => {
  res.send("Index");
});

app.get("/biler", bilerRouter);
app.get("/test", indexRouter);
app.get("/api/cars", apiCarsRouter);

app.get("/login", (req, res) => {
  res.send("Login");
});

app.post("/register", registerRouter);

app.get("/dashboard", (req, res) => {
  res.send("Dasboard");
});

const port = process.env.PORT || 8080;

app.listen(port);
