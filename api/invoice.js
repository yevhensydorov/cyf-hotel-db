const express = require("express");
const router = express.Router();

router.put("/invoice", (req, res) => {
  // TODO read req.query.reservationId and req.body.invoice and insert into DB
  res.status(200).json({
    reservationId: req.query.reservationId,
    invoice: req.body.invoice
  });
});

module.exports = router;
