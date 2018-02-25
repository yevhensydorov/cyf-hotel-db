PRAGMA foreign_keys = ON;

-- CUSTOMERS

create table customers (
	customer_id 									integer primary key,
	title 												varchar,
	firstname 										varchar,
	surname 											varchar,
	email 												varchar
);

-- ROOM_TYPES

create table room_types (
	room_type_id 									integer primary key,
	type_name 										varchar,
	original_price 								real,
	current_price 								real
);


-- ROOMS

create table rooms (
	room_id 											integer primary key,
	room_type_id									integer not null,
	sea_view 											boolean default false,
	foreign key(room_type_id)			references room_types(room_type_id)
);


-- RESERVATIONS

create table reservations (
	reservation_id 								integer primary key,
	customer_id										integer not null,
	room_id 											integer not null,
	check_in_date 								datetime not null,
	check_out_date 								datetime,
	price_per_night 							real,
	foreign key(customer_id)			references customers(customer_id),
	foreign key(room_id)					references rooms(room_id)
);


-- -- INVOICES

create table invoices (
	invoice_id 										integer primary key,
	reservation_id 								integer,
	total            							number,
	invoice_date_time							datetime not null,
	paid             							boolean default false,
	foreign key(reservation_id)		references reservations(reservation_id)
);


insert into customers (title, firstname, surname, email) values ('Mr', 'Donald', 'Trump', 'donald.trump@whitehouse.gov');
insert into customers (title, firstname, surname, email) values ('Mr', 'Yevhen', 'Sydorov', 'yevhenmail@mail.com');
insert into customers (title, firstname, surname, email) values ('Mr', 'Colm', "O'Conner", 'colm.oconner.github@gmail.com');
insert into customers (title, firstname, surname, email) values ('Mrs', 'Jacey', 'Maggio', 'Hilda_Funk85@hotmail.com');
insert into customers (title, firstname, surname, email) values ('Mrs', 'Carrie', 'Schuster', 'Alexys.Kozey92@hotmail.com');
insert into customers (title, firstname, surname, email) values ('Mr', 'Newton', 'Satterfield', 'Precious.Balistreri28@hotmail.com');
insert into customers (title, firstname, surname, email) values ('Mr', 'Trinity', 'Wisozk', 'Maida62@gmail.com');
insert into customers (title, firstname, surname, email) values ('Mrs', 'Bertrand', 'Marvin', 'Maybelle_Wyman@yahoo.com');
insert into customers (title, firstname, surname, email) values ('Mrs', 'Uriel', 'Nader', 'Zaria.Bashirian4@yahoo.com');
insert into customers (title, firstname, surname, email) values ('Mr', 'Reynold', 'Beier', 'Myra12@gmail.com');

insert into room_types (type_name, original_price, current_price) values ('One-Bedroom-Basic', 234.05, 150.05);
insert into room_types (type_name, original_price, current_price) values ('Two-Bedroom-Basic', 309.05, 200.05);
insert into room_types (type_name, original_price, current_price) values ('Three-Bedroom-Basic', 435.05, 250.05);
insert into room_types (type_name, original_price, current_price) values ('One-Bedroom-Middle', 264.05, 170.05);
insert into room_types (type_name, original_price, current_price) values ('Two-Bedroom-Middle', 339.05, 230.05);
insert into room_types (type_name, original_price, current_price) values ('Three-Bedroom-Middle', 465.05, 280.05);
insert into room_types (type_name, original_price, current_price) values ('One-Bedroom-Posh', 334.05, 250.05);
insert into room_types (type_name, original_price, current_price) values ('Two-Bedroom-Posh', 409.05, 300.05);
insert into room_types (type_name, original_price, current_price) values ('Three-Bedroom-Posh', 535.05, 350.05);
insert into room_types (type_name, original_price, current_price) values ('Three-Bedroom-King', 835.05, 650.05);

insert into rooms (room_type_id, sea_view) values (1, 0);
insert into rooms (room_type_id, sea_view) values (2, 1);
insert into rooms (room_type_id, sea_view) values (3, 1);
insert into rooms (room_type_id, sea_view) values (4, 0);
insert into rooms (room_type_id, sea_view) values (5, 1);
insert into rooms (room_type_id, sea_view) values (6, 1);
insert into rooms (room_type_id, sea_view) values (7, 0);
insert into rooms (room_type_id, sea_view) values (8, 1);
insert into rooms (room_type_id, sea_view) values (9, 1);
insert into rooms (room_type_id, sea_view) values (10, 1);

insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (1, 1, '2018-01-30', '2018-02-06', 56);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (2, 2, '2018-01-03', '2018-05-13', 156);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (3, 3, '2018-01-13', '2017-02-03', 536);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (4, 4, '2018-01-07', '2018-02-03', 516);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (5, 5, '2018-01-23', '2018-02-14', 56);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (6, 6, '2017-10-04', '2017-12-08', 156);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (7, 7, '2017-02-15', '2017-04-03', 526);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (8, 8, '2018-01-25', '2018-12-03', 563);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (9, 9, '2018-01-12', '2018-04-23', 562);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (10, 10, '2017-07-03', '2018-02-04', 356);

insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (9, 5, '2017-12-10', '2018-01-04', 556);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (10, 1, '2018-01-04', '2018-01-09', 156);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (10, 9, '2018-02-01', '2018-03-17', 56);

insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (2, 1, '2017-07-10', '2017-08-04', 386);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (3, 5, '2018-02-13', '2018-02-14', 756);
insert into reservations (customer_id, room_id, check_in_date, check_out_date, price_per_night) values (8, 10, '2018-01-10', '2018-01-18', 556);


insert into invoices (reservation_id, total, invoice_date_time, paid) values (1, 143.50, '2018-01-01', 1);
insert into invoices (reservation_id, total, invoice_date_time) values (2, 250.50, '2018-02-01');
insert into invoices (reservation_id, total, invoice_date_time) values (3, 450.50, '2018-03-01');
insert into invoices (reservation_id, total, invoice_date_time, paid) values (4, 1433.50, '2018-10-01', 1);
insert into invoices (reservation_id, total, invoice_date_time) values (5, 254.50, '2018-12-01');
insert into invoices (reservation_id, total, invoice_date_time) values (6, 276.50, '2018-03-05');
insert into invoices (reservation_id, total, invoice_date_time, paid) values (7, 133.50, '2018-01-10', 1);
insert into invoices (reservation_id, total, invoice_date_time) values (8, 750.50, '2018-02-11');
insert into invoices (reservation_id, total, invoice_date_time) values (9, 350.50, '2018-01-01');
insert into invoices (reservation_id, total, invoice_date_time) values (10, 280.50, '2018-09-03');