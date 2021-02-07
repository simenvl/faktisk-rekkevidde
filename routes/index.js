var express = require("express");
var router = express.Router();

router.get("/test", (req, res) => {
  rjson = {
    navn: "Simen",
  };
  res.json(rjson);
});

module.exports = router;
