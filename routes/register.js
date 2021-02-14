const express = require("express");
const router = express.Router();
const pool = require("../server/db");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
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
      (err, results) => {
        if (err) {
          throw err;
        }

        if (results.rows.length > 0) {
          errors.push({ message: "Epost allerede registrert" });
          res.status(200).json({
            success: false,
            message: errors,
          });
        } else {
          pool.query(
            `INSERT INTO users (name, email, password)
                VALUES ($1, $2, $3)
                RETURNING id, password`,
            [name, email, hashedPassword],
            (err, results) => {
              if (err) {
                throw err;
              }
              console.log(results.rows);
              res.status(200).json({
                success: true,
                message: "Du er nå registrert",
              });
            }
          );
        }
      }
    );
  }
});

module.exports = router;
