import express, { Request, Response } from 'express';
import { User, UserStore } from '../models/user';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import verifyAuthToken from '../middleware/verifyAuthToken';

dotenv.config();

const store = new UserStore();

// express handler function
const create = async (req: Request, res: Response) => {
  const user: User = {
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    user_password: req.body.user_password,
  };
  try {
    const newUser = await store.create(user);
    var token = jwt.sign({ user: newUser }, process.env.TOKEN_SECRET);
    console.log('create user route.');
    res.json(token);
  } catch (err) {
    res.status(400);
    res.json(err + user);
  }
};

const index = async (_req: Request, res: Response) => {
  try {
    const users = await store.index();
    console.log(users);
    res.json(users);
    console.log('Index user route.');
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const user = await store.show(req.params.id);
    res.json(user);
    console.log('Show user route.');
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
};

const authenticate = async (req: Request, res: Response) => {
  const user: User = {
    username: req.body.username as string,
    firstname: req.body.firstname as string,
    lastname: req.body.lastname as string,
    user_password: req.body.user_password as string,
  }
  try {
      const u = await store.authenticate(user.username, user.user_password)
      var token = jwt.sign({ user: u }, process.env.TOKEN_SECRET);
      res.json(token)
  } catch(error) {
      res.status(401)
      res.json({ error })
  }
};
//   try {
//     const resultForauthentication = await store.authenticate(
//       req.body.username,
//       req.body.user_password,
      
//     );
//     if (resultForauthentication) {
//       const token = jwt.sign({ user: resultForauthentication }, process.env.TOKEN_SECRET);
//       res.json(token);
//     } else {
//       res.status(401).send('No authentication.');
//     }
//   } catch (err) {
//     res.status(401);
//     res.send('did not get it right');
//   }
// };

const user_routes = (app: express.Application): void => {
  app.post('/authenticate', authenticate);
  app.post('/createusers', create);
  // provide your-256-bit-secret field in JWT debugger for testing
  app.get('/users', index);
  app.get('/users/:id', verifyAuthToken, show);
};

export { store, user_routes };