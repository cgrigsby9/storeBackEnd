/* Replace with your SQL commands */

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_status VARCHAR(15) NOT NULL,
    order_time DATE DEFAULT CURRENT_DATE,
    user_id bigint REFERENCES users(id)
);