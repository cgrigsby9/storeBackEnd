import express, { Request, Response } from 'express';
import { Book, BookStore } from '../models/books';
import dotenv from 'dotenv';
import verifyAuthToken from '../middleware/verifyAuthToken';

dotenv.config();

const store = new BookStore();

// express handler function
const index = async (_req: Request, res: Response) => {
  try {
    const books = await store.index();
    console.log(books);
    res.json(books);
    console.log('Index book route.');
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const product = await store.show(req.params.id);
    res.json(product);
    console.log('Show book route');
  } catch (err) {
    res
      .status(400)
      .send(`Could not get book ${req.params.id}: ${err.message}`);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const Book: Book = {
      id: req.body.id,
      title: req.body.Book_title,
      author: req.body.Book_author,
      genre: req.body.Book_genre,
      total_pages: req.body.total_pages
    };

    const newBook = await store.create(Book);
    console.log('Create book route.');
    res.json(newBook);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json(err.message);
  }
};

const deletebooks = async (req: Request, res: Response) => {
  try {
    const deleted = await store.delete(req.params.id);
    console.log('delete product route.');
    res.json(deleted);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json(err.message);
  }
};

const books_routes = (app: express.Application): void => {
  app.get('/books', index);
  app.get('/books/:id', show);
  app.post('/books', verifyAuthToken, create);
  app.delete('/deletebooks/:id', verifyAuthToken, deletebooks);
};

export { books_routes, store };