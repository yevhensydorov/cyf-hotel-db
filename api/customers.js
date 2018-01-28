const express = require("express");
const router = express.Router();

const customers = require("../public/data/customers.json");

router.get("/:id?", (req, res) => {
  if (req.params.id) {
    const filter = customers.filter(
      customer => customer.id === parseInt(req.params.id)
    );
    res.status(200).json({
      customers: filter
    });
  } else {
    res.status(200).json({
      customers: customers
    });
  }
});

router.post("/", (req, res) => {
  // TODO read req.body.customer
  res.status(200).json(req.body.customer);
});

router.put("/", (req, res) => {
  // TODO update per req.body.customer
  res.status(200).json(req.body.customer);
});

router.delete("/", (req, res) => {
  // TODO delete req.body.customer
  res.status(200).json(req.body.customer);
});

module.exports = router;
