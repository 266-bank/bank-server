const db = require("pg");

const { Client } = require('pg');

exports.client = new Client({
  // connectionString: 'http://127.0.0.1:11562/?key=a7422cd2-e52c-4cf5-a982-8d90f787f501', //
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


// exports.client = new Client({
//   user: 'hpnwmkuqlcavvd',
//   host: 'ec2-3-234-85-177.compute-1.amazonaws.com',
//   database: 'd1sq58uicfpsqg',
//   password: '2ae25e2378527c4aa9cdabb1ecf43e90a9f08f8ca0dc0c2959dba1e1d871a121',
//   port: 5432,
//   ssl: {
//     rejectUnauthorized: false
//   },
//   connectionString: 'postgres://hpnwmkuqlcavvd:2ae25e2378527c4aa9cdabb1ecf43e90a9f08f8ca0dc0c2959dba1e1d871a121@ec2-3-234-85-177.compute-1.amazonaws.com:5432/d1sq58uicfpsqg'
// });
