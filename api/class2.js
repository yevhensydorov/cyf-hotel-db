const filename = "./database/database.sqlite";

const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const router = express.Router();
let db = new sqlite3.Database(filename);

router.get('/customers', function(req, res) {
  // TODO: fix code here
  const sql = "select * from customers";
  db.all(sql, [], (err, rows) => {
    res.status(200).json({
      customers: rows
    });
  });
});


router.get('/customers/:id', function(req, res) {
  // TODO: add code here
  if(isNaN(Number(req.params.id))){
    res.status(400).send("Check user ID in the link path");
  } else {
    const sql = `select * 
            from customers 
            where customer_id = ${req.params.id}`;
    db.all(sql, [], (err, rows) => {
      res.status(200).json({
        customers: rows
      });
    });
  }
});


router.get('/customers/name/:surname', function(req, res) {
  // TODO: add code here
  const sql = `select * 
              from customers 
              where surname like '%${req.params.surname}%'`;
    db.all(sql, [], (err, rows) => {
      res.status(200).json({
        customers: rows
      });
    });
});


router.post('/customers/', function(req, res) {
  // EXPECTED JSON Object:
  // {
  //   title: 'Mr',
  //   firstname: 'Laurie',
  //   surname: 'Ainley',
  //   email: 'laurie@ainley.com'
  // }

  // TODO: add code here
  if(req.body.title.length != 0 && req.body.firstname.length != 0 && req.body.surname.length != 0 && req.body.email.length != 0){
    db.run(`insert into 
            customers (title, 
                      firstname, 
                      surname, 
                      email) 
            values ('${req.body.title}', 
                    '${req.body.firstname}', 
                    '${req.body.surname}', 
                    '${req.body.email}')`
    );
  } else {
    res.status(400);
    console.log("Check your request");
  }
});


router.put('/customers/:id', function(req, res) {
  // TODO: add code here

  db.run(`update customers 
          set title     = '${req.body.title}',
              firstname = '${req.body.firstname}', 
              surname   = '${req.body.surname}', 
              email     = '${req.body.email}'
          where customer_id = ${req.params.id}`
        );
});


// get '/reservations'
// TODO: add code here


// get '/reservations/:id'
// TODO: add code here


// delete '/reservations/:id'
// TODO: add code here


// get '/reservations/starting-on/:startDate'
// TODO: add code here


// get '/reservations/active-on/:date'
// TODO: add code here

router.post('/reservations/', function(req, res) {
// EXPECTED JSON Object:
// {
//   customer_id: 1,
//   room_id: 1,
//   check_in_date: '2018-01-20',
//   check_out_date: '2018-01-22',
//   room_price: 129.90
// }

  // TODO: add code here
  if(req.body.customer_id.length != 0 && req.body.room_id.length != 0 && req.body.check_in_date.length != 0 && req.body.check_out_date.length != 0 && req.body.room_price != 0){
    db.run(`insert into 
            reservations (customer_id, 
                      room_id, 
                      check_in_date, 
                      check_out_date,
                      room_price) 
            values ('${req.body.customer_id}', 
                    '${req.body.room_id}', 
                    '${req.body.check_in_date}', 
                    '${req.body.check_out_date}',
                    '${req.body.room_price}')`
    );
  } else {
    res.status(400);
    console.log("Check your request");
  }
});

// get `/detailed-invoices'
// TODO: add code here


// get `/reservations/details-between/:from_day/:to_day`
// TODO: add code here

module.exports = router;
