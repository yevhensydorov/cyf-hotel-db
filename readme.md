# Code Your Future DB Exercise 3

## Installation

Install the dependencies using `npm i`.

Launch server using `npm start` and go to [http://localhost:8080/](http://localhost:8080/)

## Introduction

This exercise involves implementing various aspects of a hotel booking system. It involves a variety of operations on the database to fetch, insert and update data.

The tasks build on your previous experience using SQL with SQLite and Node.js. The key components of the application are as follows:

* `index.js` - sets up the application for use
* `server/api.js` - routes and application logic for the API 
* `public/*` - each folder contains the front-end code that interacts with the API for each exercise below
* `database/database.sqlite` - SQLite database containing some seed data

Below is the database schema that will be used for the exercise.

## Database Schema

![ERD](http://i.imgur.com/Wlqfao1.png)

## Instructions

In order to complete the exercises below, you will need to edit the code in `/server/api.js`, generally guided by the TODO comments.

Go to http://localhost:8080/ to get started.

### Exercise 0

Before getting started, we need to complete the database schema. The database provided contains 4 tables - you must create the tables `reviews` and `reservations` in order to complete it. You should set up these tables as follows:

```
reservations
id INTEGER PRIMARY KEY AUTOINCREMENT
customer_id INTEGER 
room_id INTEGER
check_in_date DATE
check_out_date DATE
room_price INTEGER

reviews
id INTEGER PRIMARY KEY AUTOINCREMENT
customer_id INTEGER
room_type_id INTEGER
rating INTEGER
comment TEXT
review_date DATE
```

You can do this however you choose - through the sqlite command line interfact, or via a GUI such as [SQLiteStudio](https://sqlitestudio.pl/index.rvt).

### Exercise 1

**User story:** As a staff member, I want to be able to view a list of customers so that I can see who has visited our hotel

An example has been provided for this exercise, showing how to interact with the SQLite database. Simply uncomment the TODO section, and comment out the existing JSON response being returned.

### Exercise 2

**User story:** As a guest, I want to register my details so that I can check availability for my stay

Take the data being POSTed to the /customers endpoint and insert it into the database.

### Exercise 3

**User story:** As a guest, I want to browse the types of rooms available at the hotel in ascending price order so I can decide which room I'd like to book

We store prices in pennies as `integer`s rather than as `float`s as they tend to cause less problems when performing calculations.

Where the `current_price` does not equal the `standard_price`, show the `standard_price` with a line through, and the `current_price` immediately after (e.g. ~~£80~~ £70).

### Exercise 4

**User story:** As a staff member, I want to be able to apply a discount to the rate of a specific type of room so that it will encourage bookings

You can check this is working correctly by cross-referencing with the interface in exercise 3.

### Exercise 5

**User story:** As a guest, I want to book a room so that I have somewhere to stay on my holiday

Bear in mind that the `room_price` should be set to the `current_price` of the `room_type` table. 

### Exercise 6

**User story:** As a staff member, I want to be able to search for a booking by the customer's reservation ID or name so that I can confirm their stay

You will need to implement both search methods in this page.

### Exercise 7

**User story:** As a staff member, I want to be able to see a list of the bookings within the next 30 days of a specified date in chronological order so that I can prepare the hotel

This interface should show a list of upcoming bookings, including customer name and the type of room (e.g. King) - not just the IDs

### Exercise 8

**User story:** As a staff member, I want to be able to create an invoice including any surcharges so that I can request payment from guests

This interface should return an invoice for the customer that includes:

* Customer name
* Check in date
* Check out date
* Room number
* Room type
* Room cost
* Surcharges
* Total cost
* Paid (whether the invoice is due or has been paid already)

### Exercise 9

**User story:** As a guest, I want to be able to leave a review so that I can inform others about the quality of the rooms

The guest should be able to submit a review for the type of room they stayed in, including a rating from 1-5 stars.

### Exercise 10

**User story:** As hotel manager, I want to display average rating and reviews of each room type so that guests can feel comfortable about the quality of the hotel

For this exercise, you are on your own! You will need to create the HTML UI, the API endpoint, and the relevant queries to fetch the aggregated rating for each room, plus the reviews for each. This will require joins to fetch the required data and an operation to calculate the average rating. You might find it helpful to copy the UI boilerplate from the previous exercises, but feel free to try writing the whole interface yourself.

### Stretch Goals

* Can you add validation to ensure erroneous data isn't added to the endpoints that insert data into the database?
* Can you add error messages to describe the errors that are encountered?
* Can you add a success message when data has been added/updated successfully?
* Can you ensure each customer added has a unique email address?
* Can you replace the input fields that ask for an ID with a dropdown allowing the user to select one of the existing records?