const db = require("pg");

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

// exports.client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'testdb',
//     password: '1234abcd',
//     port: 5432,
// });
