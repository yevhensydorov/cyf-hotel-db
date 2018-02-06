const express = require("express");
const router = express.Router();

const customers = require("./customers");
const discount = require("./discount");
const invoice = require("./invoice");
const reservations = require("./reservations");
const reviews = require("./reviews");
const roomTypes = require("./room-types");
const class2 = require("./class2");

router.use("/customers", customers);
router.use("/discount", discount);
router.use("/invoice", invoice);
router.use("/reservations", reservations);
router.use("/reviews", reviews);
router.use("/room-types", roomTypes);
router.use("/api", class2);

module.exports = router;

// router.use("/v2", v2ApiController);
