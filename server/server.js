if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const path = require("path");

const bcrypt = require("bcrypt");

//const loginRouter = require("../routes/login");
const bilerRouter = require("../routes/biler");
const indexRouter = require("../routes/index");
const apiCarsRouter = require("../routes/api-cars");
const pool = require("./db");

// config

app.use(express.static(path.join(__dirname + "/../public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/../views"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Index");
});

app.get("/biler", bilerRouter);
app.get("/test", indexRouter);
app.get("/api/cars", apiCarsRouter);

app.get("/login", (req, res) => {
  res.send("Login");
});

app.post("/register", async (req, res) => {
  let { name, email, password, password2 } = req.body;

  console.log({
    name,
    email,
    password,
    password2,
  });

  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ message: "Skriv inn i alle felter" });
  }

  if (password.length < 6) {
    errors.push({ message: "Passordet må inneholde minimum 6 tegn" });
  }

  if (password != password2) {
    errors.push({ message: "Passordene er ulike" });
  }

  if (errors.length > 0) {
    res.json({ errors: errors });
  } else {
    let hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    pool.query(
      `SELECT * FROM users 
      WHERE email = $1`,
      [email],
      (err, res) => {
        if (err) {
          throw err;
        }
        console.log(res.rows);
      }
    );
  }
});

app.get("/dashboard", (req, res) => {
  res.send("Dasboard");
});

const port = process.env.PORT || 8080;

app.listen(port);
