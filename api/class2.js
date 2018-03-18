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
  // db.run(`delete from 
  //         reservations where
  //         reservation_id = ${req.params.id}`);
  const sql = `delete from reservations where reservation_id = ?`;
  db.run(sql, req.params.id, (err, rows) => {
    if (err){
        console.err(err);
        res.status(500);
    } else {
        res.status(202);
    }
    res.end();
  });
  
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
            where check_in_date <= '${req.params.date}' and check_out_date >= '${req.params.date}'`;
  db.all(sql, [], (err, rows) => {
    res.status(200).json({
      reservations: rows
    });
  });
});


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
  } else {
    res.status(400);
    console.log("Check your request");
  }
});

router.get('/reservations-and-invoices', (req, res) => {
  const sql = `select * from reservations 
               join invoices on 
               reservations.reservation_id = invoices.invoice_id;`;
  db.all(sql, [], (err, rows) => {
    res.status(200).json({
      reservations: rows
    });
  });
});

router.get('/reservations-per-customer/', (req, res) => {
  const sql = `select customers.firstname, customers.surname, 
               reservations.customer_id, 
               count(*) as num_of_res 
               from reservations as reservations 
               JOIN customers 
               on (customers.customer_id = reservations.customer_id) 
               group by customers.customer_id;`;
  db.all(sql, [], (err, rows) => {
    res.status(200).json({
      reservations: rows
    });
  });
});

router.get('/num-of-reservations-per-room-id/', (req, res) => {
  const sql = `select rooms.room_id, rooms.sea_view, 
               room_types.type_name, 
               count(*) as num_of_res 
               from rooms join reservations 
               on reservations.room_id = rooms.room_id 
               join room_types 
               on rooms.room_type_id = room_types.room_type_id 
               group by reservations.room_id;`;
  db.all(sql, [], (err, rows) => {
    res.status(200).json({
      reservations: rows
    });
  });
});

router.get('/reservations/details-between/:from_day/:to_day/', (req, res) => {
  const sql = `select reservations.reservation_id,
               customers.title, customers.firstname,
               customers.surname, customers.email,
               reservations.check_in_date, reservations.check_out_date,
               rooms.sea_view from reservations 
               join customers
               on reservations.customer_id = customers.customer_id 
               join rooms 
               on reservations.room_id = rooms.room_id 
               where check_in_date between '${req.params.from_day}' and '${req.params.to_day}';`;
  db.all(sql, [], (err, rows) => {
    res.status(200).json({
      reservations: rows
    });
  });
});

router.get('/customers-data', (req, res) => {
  var sql = `select customers.customer_id,
     customers.title, 
     customers.firstname, 
     customers.surname, 
     customers.email, 
     reservations.room_id, 
     reservations.check_in_date, 
     reservations.check_out_date from reservations JOIN customers ON reservations.customer_id = customers.customer_id`

  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).end()
      console.log(err)
    } else {
      res.status(200).json({
        rows
      })
    }
  })
})

// get `/detailed-invoices'
// TODO: add code here


// get `/reservations/details-between/:from_day/:to_day`
// TODO: add code here

module.exports = router;
