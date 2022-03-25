/* Replace with your SQL commands */

CREATE TABLE users (
    username VARCHAR(60) UNIQUE NOT NULL,
    firstname VARCHAR(60) NOT NULL,
    lastname VARCHAR(60) NOT NULL,
    user_password VARCHAR NOT NULL
);