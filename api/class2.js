const filename = "./database/database.sqlite";

const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const router = express.Router();
let db = new sqlite3.Database(filename);

router.get('/customers', function(req, res) {
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

router.get('/reservations', function(req, res) {
  const sql = "select * from reservations";
  db.all(sql, [], (err, rows) => {
    res.status(200).json({
      reservations: rows
    });
  });
});

router.get('/reservations/:id', function(req, res) {
  if(isNaN(Number(req.params.id))){
    res.status(400).send("Check user ID in the link path");
  } else {
    const sql = `select * 
            from reservations 
            where reservation_id = ${req.params.id}`;
    db.all(sql, [], (err, rows) => {
      res.status(200).json({
        reservations: rows
      });
    });
  }
});

router.delete('/reservations/:id', (req, res) => {
  db.run(`delete from 
          reservations where
          reservation_id = ${req.params.id}`);
});

router.get('/reservations/starting-on/:startDate', (req, res) => {
  const sql = `select * 
            from reservations 
            where check_in_date = '${req.params.startDate}'`;
  db.all(sql, [], (err, rows) => {
    res.status(200).json({
      reservations: rows
    });
  });
});

router.get('/reservations/active-on/:date', (req, res) => {
  const sql = `select * 
            from reservations 
            where check_in_date >= '${req.params.date}'`;
  db.all(sql, [], (err, rows) => {
    res.status(200).json({
      reservations: rows
    });
  });
});

// get '/reservations/active-on/:date'
// TODO: add code here

router.post('/reservations/', function(req, res) {
  if(req.body.customer_id.length != 0 && req.body.room_id.length != 0 && req.body.check_in_date.length != 0 && req.body.check_out_date.length != 0 && req.body.price_per_night != 0){
    db.run(`insert into 
            reservations (customer_id, 
                      room_id, 
                      check_in_date, 
                      check_out_date,
                      price_per_night) 
            values ('${req.body.customer_id}', 
                    '${req.body.room_id}', 
                    '${req.body.check_in_date}', 
                    '${req.body.check_out_date}',
                    '${req.body.price_per_night}')`
    );
    console.log(req.body.price_per_night);
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
