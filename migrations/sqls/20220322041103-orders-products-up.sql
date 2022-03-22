/* Replace with your SQL commands */

CREATE TABLE order_books (
    id SERIAL PRIMARY KEY,
    quantity integer NOT NULL,
    order_id bigint REFERENCES orders(id),
    books_id bigint REFERENCES books(id)
);