# Code Your Future DB Exercise 3

## Installation

Install the dependencies using `npm i`.

Launch server using `npm start` and go to [http://localhost:8080/](http://localhost:8080/)

## Introduction

This exercise involves implementing various aspects of a hotel booking system. It involves a variety of operations on the database to fetch, insert and update data.

The tasks build on your previous experience using SQL with SQLite and Node.js. The key components of the application are as follows:

`index.js` - sets up the application for use
`server/api.js` - routes and application logic for the API 
`public/*` - each folder contains the front-end code that interacts with the API for each exercise below

Below is the database schema that will be used for the exercise.

## Database Schema

![ERD](http://i.imgur.com/Wlqfao1.png)

## Instructions

In order to complete the exercises below, you will need to edit the code in `/server/api.js`, generally guided by the TODO comments.

### Exercise 0

Before getting started, we need to complete the database schema. The database provided contains 4 tables - you must create the tables `reviews` and `reservations` in order to complete it. You should set up these tables as follows:

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

### Exercise 1

**User story:** As a staff member, I want to be able to view a list of customers

An example has been provided for this exercise, showing how to interact with the SQLite database. Simply uncomment the TODO section, and comment out the existing JSON response being returned.

### Exercise 2

**User story:** As a guest, I want to register my details so that I can check availability for my stay

### Exercise 3

**User story:** As a guest, I want to browse the types of rooms available at the hotel in ascending price order so I can decide which room I'd like to book

### Exercise 4

**User story:** As a staff member, I want to be able to apply a discount to the rate of a specific type of room so that it will encourage bookings

### Exercise 5

**User story:** As a guest, I want to book a room so that I have somewhere to stay on my holiday

### Exercise 6

**User story:** As a staff member, I want to be able to search for a booking by the customer's reservation ID or name so that I can confirm their stay

### Exercise 7

**User story:** As a staff member, I want to be able to see a list of the bookings over the next month in chronological order so that I can prepare the hotel

### Exercise 8

**User story:** As a staff member, I want to be able to create an invoice including any surcharges so that I can request payment from guests

### Exercise 9

**User story:** As a guest, I want to be able to leave a review so that I can inform others about the quality of the rooms

### Exercise 10

**User story:** As hotel manager, I want to display average rating and reviews of each room type so that guests can feel comfortable about the quality of the hotel
