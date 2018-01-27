const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(403).json({
    Error: "Forbidden"
  });
});

router.put("/", (req, res) => {
  // TODO read roomId from req.query.id and update discount
  res.status(200).json({
    id: req.query.id,
    discount: req.body.discount
  });
});

module.exports = router;
