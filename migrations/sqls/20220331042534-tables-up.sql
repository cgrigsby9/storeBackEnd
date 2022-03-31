/* Replace with your SQL commands */
CREATE TABLE books ( id SERIAL PRIMARY KEY, title VARCHAR(150) NOT NULL, author VARCHAR(255) NOT NULL, genre VARCHAR(50) NOT NULL, total_pages integer );

CREATE TABLE users ( id SERIAL PRIMARY KEY, username VARCHAR(60) UNIQUE NOT NULL, firstname VARCHAR(60) NOT NULL, lastname VARCHAR(60) NOT NULL, user_password VARCHAR NOT NULL );

CREATE TABLE orders ( id SERIAL PRIMARY KEY, order_status VARCHAR(15) NOT NULL, order_time DATE DEFAULT CURRENT_DATE, user_id bigint REFERENCES users(id) );

CREATE TABLE order_books ( id SERIAL PRIMARY KEY, quantity integer NOT NULL, order_id bigint REFERENCES orders(id), books_id bigint REFERENCES books(id), );

