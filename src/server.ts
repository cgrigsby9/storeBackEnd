import express, { Request, Response } from 'express';
import { books_routes } from './handlers/book';
import { user_routes } from './handlers/users';
import { order_routes } from './handlers/orders';

const app: express.Application = express();
const address = '0.0.0.0:5000';

app.use(express.json());
app.get('/', function (req: Request, res: Response) {
  res.send('Welcome to the BookStore.');
});

books_routes(app);

user_routes(app);

order_routes(app);


app.listen(5000, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
