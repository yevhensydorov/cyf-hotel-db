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
  res.status(200).json( req.body.customer );
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
  res.status(200).json({
    id: req.query.id,
    discount: req.body.discount
  });
});

router.post('/reservations', function(req, res) {
  // TODO read req.body.reservation, look up price by room id and insert reservation into DB
  res.status(200).json(req.body.reservation);
});

router.get('/reservations', function(req, res) {
  // TODO read req.query.name or req.query.id to look up reservations and return
  res.status(200).json({
    reservations:[{
      title: 'Mr',
      firstname: 'Laurie',
      surname: 'Ainley',
      email: 'laurie@ainley.com',
      roomId: 1,
      checkInDate: '2017-10-10',
      checkOutDate: '2017-10-17'
    }]
  });
});

router.get('/reservations/date-from/:dateFrom', function(req, res) {
  // TODO read req.params.dateFrom to look up reservations and return
  res.status(200).json({
    reservations:[{
      title: 'Mr',
      firstname: 'Laurie',
      surname: 'Ainley',
      email: 'laurie@ainley.com',
      roomId: 1,
      checkInDate: '2017-10-10',
      checkOutDate: '2017-10-17'
    }, {
      title: 'Miss',
      firstname: 'Someone',
      surname: 'Else',
      email: 'someone@else.com',
      roomId: 2,
      checkInDate: '2017-11-12',
      checkOutDate: '2017-11-15'
    }]
  });
});

router.put('/invoice', function(req, res) {
  // TODO read req.query.reservationId and req.body.invoice and insert into DB
  res.status(200).end();
});

module.exports = router;
