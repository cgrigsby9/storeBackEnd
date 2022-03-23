# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

localhost:3000

## API Endpoints
#### Products
index route "/books[GET]" 

show route "/books/:id[GET]" 

create route "/books[POST]" 

delete route "/deleteproduct/:id[DELETE]" 
#### Users

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
index route "/books[GET]
show route "/books/:id[GET]
create route "/books[POST]
delete route 'deletebooks/:id[DELETE]

#### User
index route "/users[GET]
show route '/users/:id[GET]
create route "/createuser[POST]
authenticate route '/authenticate[POST]


#### Orders
show route "/orders/:id[GET]" 

create route "/orders[POST]"
sample request body:
{ "id": 1, "order_status": "Active", "user_id": 4 }

showByUser route "/orders/users/:userid[GET]"

completedOrdersByUser route "/completedorders/:userid[GET]"

addProduct route "/orders:orderid/products[POST]"
