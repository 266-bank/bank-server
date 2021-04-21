const db = require("pg");

const { Client } = require('pg');

exports.client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: '1234abcd',
    port: 5432,
});
