const { Client } = require('pg');

exports.client = new Client({
  // connectionString: 'http://127.0.0.1:11562/?key=a7422cd2-e52c-4cf5-a982-8d90f787f501', //
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});