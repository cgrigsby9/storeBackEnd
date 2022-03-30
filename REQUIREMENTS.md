# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

localhost:3000

ENV Requirements:

POSTGRES_HOST
POSTGRES_DB
POSTGRES_USER
POSTGRES_TEST_DB
POSTGRES_PASSWORD
ENV=dev
BCRYPT_PASSWORD
SALT_ROUNDS
TOKEN_SECRET

## API Endpoints
#### Products
index route "/books[GET]" "http://localhost:3000/books"

show route "/books/:id[GET]" "http://localhost:3000/books/:id"

create route "/books[POST]" "http://localhost:3000/books"

sample request body:
{
"title": "Fellowship of the Ring",
"author": "Tolkien",
"genre": "fantasy",
"total_pages": 300
}
sample request header: {Authentication: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InBvc3RncmVzIiwiZmlyc3RuYW1lIjoiTWljaGFlbCIsImxhc3RuYW1lIjoiSmFja3NvbiIsInVzZXJfcGFzc3dvcmQiOiIkMmIkMTAkQlJxM3RSVmxlcnRRWXNJY3RDQUJCLk5KbGNzVHpzM0U5SVV1azYyalhvRE1GYkJZZEZLVXkifSwiaWF0IjoxNjQ4NjAwNjM0fQ.R0_rfzPPqYDA08N5CoMzFEkZesLmO8XWs47jsB7fCzs"

delete route "/deleteproduct/:id[DELETE]" "http://localhost:3000/deletebooks/:id"
sample request header: {Authentication: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InBvc3RncmVzIiwiZmlyc3RuYW1lIjoiTWljaGFlbCIsImxhc3RuYW1lIjoiSmFja3NvbiIsInVzZXJfcGFzc3dvcmQiOiIkMmIkMTAkQlJxM3RSVmxlcnRRWXNJY3RDQUJCLk5KbGNzVHpzM0U5SVV1azYyalhvRE1GYkJZZEZLVXkifSwiaWF0IjoxNjQ4NjAwNjM0fQ.R0_rfzPPqYDA08N5CoMzFEkZesLmO8XWs47jsB7fCzs"

#### Users
index route "/users[GET]" "http://localhost:5000/users"

sample request header: {Authentication: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InBvc3RncmVzIiwiZmlyc3RuYW1lIjoiTWljaGFlbCIsImxhc3RuYW1lIjoiSmFja3NvbiIsInVzZXJfcGFzc3dvcmQiOiIkMmIkMTAkQlJxM3RSVmxlcnRRWXNJY3RDQUJCLk5KbGNzVHpzM0U5SVV1azYyalhvRE1GYkJZZEZLVXkifSwiaWF0IjoxNjQ4NjAwNjM0fQ.R0_rfzPPqYDA08N5CoMzFEkZesLmO8XWs47jsB7fCzs"}

show route "/users/:id[GET]" "http://localhost:5000/users/:id"

sample request header: {Authentication: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InBvc3RncmVzIiwiZmlyc3RuYW1lIjoiTWljaGFlbCIsImxhc3RuYW1lIjoiSmFja3NvbiIsInVzZXJfcGFzc3dvcmQiOiIkMmIkMTAkQlJxM3RSVmxlcnRRWXNJY3RDQUJCLk5KbGNzVHpzM0U5SVV1azYyalhvRE1GYkJZZEZLVXkifSwiaWF0IjoxNjQ4NjAwNjM0fQ.R0_rfzPPqYDA08N5CoMzFEkZesLmO8XWs47jsB7fCzs"}

create route "/createuser[POST]" "http://localhost:5000/createuser"

sample request body:
{ "id": 1, "username": "postman", "firstname": "Michael", "lastname": "Jackson", "user_password": "string" }

authenticate route "/authenticate[POST]" "http://localhost:5000/authenticate"

sample request body: { "username": "postman", "user_password": "string" }

#### Orders
- show route "/orders/:id[GET]" "http://localhost:5000/orders/:id"

sample request header: {Authentication: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InBvc3RncmVzIiwiZmlyc3RuYW1lIjoiTWljaGFlbCIsImxhc3RuYW1lIjoiSmFja3NvbiIsInVzZXJfcGFzc3dvcmQiOiIkMmIkMTAkQlJxM3RSVmxlcnRRWXNJY3RDQUJCLk5KbGNzVHpzM0U5SVV1azYyalhvRE1GYkJZZEZLVXkifSwiaWF0IjoxNjQ4NjAwNjM0fQ.R0_rfzPPqYDA08N5CoMzFEkZesLmO8XWs47jsB7fCzs"}

create route "/orders[POST]" "http://localhost:5000/orders"

sample request body:
{ "id": 1, "order_status": "Active", "user_id": 4 }

sample request header: {Authentication: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InBvc3RncmVzIiwiZmlyc3RuYW1lIjoiTWljaGFlbCIsImxhc3RuYW1lIjoiSmFja3NvbiIsInVzZXJfcGFzc3dvcmQiOiIkMmIkMTAkQlJxM3RSVmxlcnRRWXNJY3RDQUJCLk5KbGNzVHpzM0U5SVV1azYyalhvRE1GYkJZZEZLVXkifSwiaWF0IjoxNjQ4NjAwNjM0fQ.R0_rfzPPqYDA08N5CoMzFEkZesLmO8XWs47jsB7fCzs"}

showByUser route "/orders/users/:userid[GET]" "http://localhost:5000/orders/users/:userid"

sample request header: {Authentication: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InBvc3RncmVzIiwiZmlyc3RuYW1lIjoiTWljaGFlbCIsImxhc3RuYW1lIjoiSmFja3NvbiIsInVzZXJfcGFzc3dvcmQiOiIkMmIkMTAkQlJxM3RSVmxlcnRRWXNJY3RDQUJCLk5KbGNzVHpzM0U5SVV1azYyalhvRE1GYkJZZEZLVXkifSwiaWF0IjoxNjQ4NjAwNjM0fQ.R0_rfzPPqYDA08N5CoMzFEkZesLmO8XWs47jsB7fCzs"}

completedOrdersByUser route "/completedorders/:userid[GET]" "http://localhost:5000/completedorders/:userid"

sample request header: {Authentication: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InBvc3RncmVzIiwiZmlyc3RuYW1lIjoiTWljaGFlbCIsImxhc3RuYW1lIjoiSmFja3NvbiIsInVzZXJfcGFzc3dvcmQiOiIkMmIkMTAkQlJxM3RSVmxlcnRRWXNJY3RDQUJCLk5KbGNzVHpzM0U5SVV1azYyalhvRE1GYkJZZEZLVXkifSwiaWF0IjoxNjQ4NjAwNjM0fQ.R0_rfzPPqYDA08N5CoMzFEkZesLmO8XWs47jsB7fCzs"}

addProduct route "/orders:orderid/books[POST]" "http://localhost:5000/orders/:orderid/books"

sample request body:
{ "books_id": 3, "quantity": 2 }

sample request header: {Authentication: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InBvc3RncmVzIiwiZmlyc3RuYW1lIjoiTWljaGFlbCIsImxhc3RuYW1lIjoiSmFja3NvbiIsInVzZXJfcGFzc3dvcmQiOiIkMmIkMTAkQlJxM3RSVmxlcnRRWXNJY3RDQUJCLk5KbGNzVHpzM0U5SVV1azYyalhvRE1GYkJZZEZLVXkifSwiaWF0IjoxNjQ4NjAwNjM0fQ.R0_rfzPPqYDA08N5CoMzFEkZesLmO8XWs47jsB7fCzs"}

## Data Shapes
#### Books
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    total_pages integer
    );

#### User
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(60) UNIQUE NOT NULL,
    firstname VARCHAR(60) NOT NULL,
    lastname VARCHAR(60) NOT NULL,
    user_password VARCHAR NOT NULL
);


#### Orders
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_status VARCHAR(15) NOT NULL,
    order_time DATE DEFAULT CURRENT_DATE,
    user_id bigint REFERENCES users(id)
); 

###ORDER_BOOKS table

CREATE TABLE order_books (
    id SERIAL PRIMARY KEY,
    quantity integer NOT NULL,
    order_id bigint REFERENCES orders(id),
    books_id bigint REFERENCES books(id),
);
