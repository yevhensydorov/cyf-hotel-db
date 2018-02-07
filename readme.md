# Code Your Future DB Module Exercises

## Introduction

This exercise involves implementing various aspects of a hotel booking system. It involves a variety of operations on the database to fetch, insert and update data.

The tasks build on your previous experience using SQL with SQLite and Node.js. The key components of the application are as follows:

* `index.js` - sets up the application for use
* `server/class2.js` - router for simple application logic and interaction with the database;
* `server/class3.js` - routes for advanced application logic and interaction with the database;

In order to interact with the server we will be using [Postman](https://www.getpostman.com/) to perform the HTTP requests.

## Installation

Install the dependencies using `npm i`.

Launch server using `npm start` and go to [http://localhost:8080/](http://localhost:8080/)


## Database Schema

![ERD](http://i.imgur.com/Wlqfao1.png)


## Instructions

In order to complete the exercises below, you will need to edit the code in `/server/class2.js`, generally guided by the TODO comments.


# Class 2

Use `/server/class2.js` for the exercises of this class.


### Exercise 0

**User Story:** As a staff member, I want to be able to view a list of customers so that I can see who has visited our hotel.

Remove the code that is returning a JSON object on end point `/customers`, and use what you have learned about to SQL to fill in the query that fetches all the customers from the database.

- select everything


### Exercise 1

**User Story:** As a staff member I need to check the details of a given customer given its id.

**User Acceptance test**: Complete the end-point `/customers/:id`, so that it extracts that customer information from the database, and replies back with that information as JSON.

- select and filter by id
- hint: simple select and filter by ID


### Exercise 2

**User Story:** As a staff member I want to search for a customer through its `surname`, but we don't know that it might be misspelled.

**User Acceptance test**: Complete the end-point `/customers/:surname`, so that it extracts that customer information from the database, and replies back with that information as JSON.

- select and filter through like
- hint: google for select and the "like" keyword


### Exercise 3

**User Story:** As a guest, I want to register my details in the system so that I can check availability for my stay.

**User Acceptance test**: Take the data being POSTed to the `/customers` endpoint and insert it into the database.


### Exercise 4

**User Story:** As a guest, I noticed that there is a typo on my details and wish to correct it.

Take the data being PUTed to the `/customers/:id` endpoint and update the corresponding entry on the database.

Note that the end-point should properly detect which customer properties are being updated, and generate the appropriate SQL update statement.

- update table
- remember your previous lesson
- hint: in the javascript code, instead of .all() you will need ... what?


### Exercise 5.a

**User Story:** As a staff member, I want to get a list of all the existing reservations.

Create an end-point to get from `/reservations` all existing reservations.

- create the endpoint from scratch


### Exercise 5.b

**User Story:** As a customer, I want to check the details of a reservation.

Create and end-point to get from `/reservations/:id` the details of a resrevation through its `id`.

- simple filtering
- create the enpoint from scratch


### Exercise 5.c

**User Story:** As a staff member, I want to get a list of all the reservations that start at a given date.

Create and end-point to get from `/reservations/starting-on/:startDate` all the reservations that start at a given date.

- simple filtering
- create the enpoint from scratch


### Exercise 5.d

**User Story:** As a staff member, i want to get a list of all the reservations that are active at a given date.

Create and end-point to get from `/reservations/active-on/:date` all the reservations that are active on a given date - some customer has a room reserved on that day.

- multiple filtering.
- create the enpoint from scratch



### Exercise 6

**User Story:** As a staff member, I want to create a new reservation.

Create and end-point to post a new reservation to `/reservations/`.

- insert into
- create the enpoint from scratch


### Exercise 7

**User Story:** As a staff member, I want to get the list of all the invoices, and the details of the referring reservations.

Create and endpoint `/detailed-invoices` from where we can get the list of invoices, together with the details for the reservation that they reffer to.

- join


### Exercise 8

**User Story:** As a staff member, I want to consult reservations, but including the room and customer information.

Update the exercies 5.* to retreieve the information of the rooms and customers as well.


### Exercise 8.b

**User story:** As a staff member, I want ot retrieve the reservations and details for rooms and customers, that happened between a given date range.

Create and endpoint to get from `/reservations/details-between/:from_day/:to_day` all the reservations and details about customer and room, between a given date range.
