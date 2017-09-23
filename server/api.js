const express = require('express');
const router = express.Router();
  
router.get('/customers', function(req, res) {
  // TODO return DB row here
  res.status(200).json({
    customers: [{
      id: 2,
      title: 'Mr',
      firstname: 'Laurie',
      surname: 'Ainley',
      email: 'laurie@ainley.com'
    }
  ]});
});

router.post('/customers', function(req, res) {
  // TODO read req.body.customer and insert into DB
  res.status(200).end();
});

router.get('/room-types', function(req, res) {
  // TODO return DB row here
  res.status(200).json({
    roomtypes: [{
      id: 2,
      name: 'premium',
      price: 6000,
      discount: 50
    }
  ]});
});

router.put('/discount', function(req, res) {
  // TODO read roomId from req.query.id and update discount
  res.status(200).end();
});

router.post('/reservations', function(req, res) {
  // TODO read req.body.reservation and insert into DB
  res.status(200).end();
});







module.exports = router;
