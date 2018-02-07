const express = require('express');
const sqlite3 = require( 'sqlite3' ).verbose();

const filename = './database/database.sqlite';
let db = new sqlite3.Database(filename);

const router = express.Router();


router.get('/customers', function(req, res) {
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


router.get('/customers/:id', function(req, res) {
  // PLACEHOLDER for code
});


router.get('/customers/:surname', function(req, res) {
  // PLACEHOLDER for code
});


router.post('/customers/', function(req, res) {
  // EXPECTED JSON Object:
  // {
  //   title: 'Mr',
  //   firstname: 'Laurie',
  //   surname: 'Ainley',
  //   email: 'laurie@ainley.com'
  // }

  // PLACEHOLDER for code
});


router.put('/customers/:id', function(req, res) {
  // EXPECTED JSON Object:
  // {
  //   title: 'Mr',
  //   firstname: 'Laurie',
  //   surname: 'Ainley',
  //   email: 'laurie@ainley.com'
  // }

  // PLACEHOLDER for code
});


// get '/reservations'
// PLACEHOLDER for code


// get '/reservations/:id'
// PLACEHOLDER for code


// get '/reservations/starting-on/:startDate'
// PLACEHOLDER for code


// get '/reservations/active-on/:date'
// PLACEHOLDER for code


// post '/reservations'
// EXPECTED JSON Object:
// {
//   customer_id: 1,
//   room_id: 1,
//   check_in_date: '2018-01-20',
//   check_out_date: '2018-01-22',
//   room_price: 129.90
// }
// PLACEHOLDER for code


// get `/detailed-invoices'
// PLACEHOLDER for code


// get `/reservations/details-between/:from_day/:to_day`
// PLACEHOLDER for code

module.exports = router;
