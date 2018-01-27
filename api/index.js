const express = require("express");
const router = express.Router();

const customers = require("./customers");
const discount = require("./discount");
const invoice = require("./invoice");
const reservations = require("./reservations");
const reviews = require("./reviews");
const roomTypes = require("./room-types");

router.use("/customers", customers);
router.use("/discount", discount);
router.use("/invoice", invoice);
router.use("/reservations", reservations);
router.use("/reviews", reviews);
router.use("/room-types", roomTypes);

module.exports = router;

// router.use("/v2", v2ApiController);
