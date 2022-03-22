import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import client from '../database';

dotenv.config();

const pepper: string = process.env.BCRYPT_PASSWORD!;
const saltRounds: string = process.env.SALT_ROUNDS!;

export type User = {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  user_password: string;
};

export class UserStore {
  async index(): Promise<Omit<User, 'user_password'>[]> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM users';
      const result = await conn.query(sql);
      conn.release();
      console.log(result);
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get users. Error: ${err}.`);
    }
  }

// show user info by id with most recent orders
async show(id: string): Promise<Omit<User, 'user_password'>> {
  try {
    const sql = 'select * from users where id = ($1);';
    const conn = await client.connect();
    const result = await conn.query(sql, [id]);
    conn.release();
    return result.rows[0];
  } catch (err) {
    throw new Error(`Could not find user ${id}. Error: ${err}`);
  }
}

async create(u: User): Promise<Omit<User, 'user_password'>> {
  try {
    const conn = await client.connect();
    const sql =
      'INSERT INTO users (id, username, firstname, lastname, user_password) VALUES($1, $2, $3, $4, $5) RETURNING *';
    const hash = bcrypt.hashSync(
      u.user_password + pepper,
      parseInt(saltRounds)
    );

    const result = await conn.query(sql, [
      u.id,
      u.username,
      u.firstname,
      u.lastname,
      hash,
    ]);
    const user = result.rows[0];

    conn.release();

    return user;
  } catch (err) {
    console.log(err.detail);
    throw new Error(
      `unable create user (${u.firstname} ${u.lastname}): ${err.detail}`
    );
  }
}

async authenticate(
  username: string,
  input_password: string
): Promise<string> {
  const conn = await client.connect();
  const sql = 'SELECT user_password FROM users WHERE username = ($1)';
  const result = await conn.query(sql, [username]);
  console.log(result);
  if (result.rows.length) {
    const user_password = result.rows[0];
    console.log(user_password);
    if (
      bcrypt.compareSync(input_password + pepper, user_password.user_password)
    ) {
      return user_password;
    } else {
      throw new Error('Wrong password, please try again.');
    }
  }
  throw new Error('Invalid username, please try again.');
}
}