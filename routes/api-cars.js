const express = require("express");
const router = express.Router();
const db = require("../server/db");

router.get("/api/cars", (req, res) => {
  db.query("SELECT * FROM ev_range;", null, (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json({
      data: result.rows,
    });
  });
});

module.exports = router;
