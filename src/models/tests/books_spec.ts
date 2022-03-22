import { Book, BookStore } from '../books';

const store = new BookStore()

describe("Book Model", () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a update method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(store.index).toBeDefined();
  });

  it('create method should add a book', async () => {
    const result = await store.create({
        id: 1,
      title: 'Bridge to Terabithia',
      author: 'Katherine Paterson',
      genre: 'Childrens',
      total_pages: 250,
    });
    expect(result).toEqual({
      id: 1,
      title: 'Bridge to Terabithia',
      total_pages: 250,
      author: 'Katherine Paterson',
      genre: 'Childrens'
    });
  });

  it('index method should return a list of books', async () => {
    const result = await store.index();
    expect(result).toEqual([{
      id: 1,
      title: 'Bridge to Terabithia',
      total_pages: 250,
      author: 'Katherine Paterson',
      genre: 'Childrens'
    }]);
  });

  it('show method should return the correct book', async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      id: 1,
      title: 'Bridge to Terabithia',
      total_pages: 250,
      author: 'Katherine Paterson',
      genre: 'Childrens'
    });
  });

  it('delete method should remove the book', async () => {
    store.delete("1");
    const result = await store.index()

    expect(result).toEqual([]);
  });
});