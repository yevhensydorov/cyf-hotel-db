const express = require("express");
const router = express.Router();

router.post("/reviews", (req, res) => {
  // TODO read req.body.review
  res.status(200).json(req.body);
});

module.exports = router;
