// `npm i dotenv` reads .env file into process.env
import dotenv from 'dotenv';
dotenv.config();

// `npm i pg` - official postgres node client
import pg from 'pg';
// use the pg client
const Client = pg.Client;

// You will need to create the database

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false }, // for Heroku, ssl is required
});

client.connect().then(() => {
  const { database, host, port } = client;
  console.log(`Connected to pg database ${database} on ${host}:${port}`);
});

export default client;
