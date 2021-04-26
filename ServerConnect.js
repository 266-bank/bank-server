const db = require("pg");

const { Client } = require('pg');

exports.client = new Client({
  user: 'ykpuhjiqwckqby',
  host: 'ec2-52-45-73-150.compute-1.amazonaws.com',
  database: 'd54n3cf1sf38rj',
  password: '5127f9f796e952299419142c4f0211d5c82e9ec2e8fc9efba29f73f233c3ef8b',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  },
  connectionString: 'postgres://ykpuhjiqwckqby:5127f9f796e952299419142c4f0211d5c82e9ec2e8fc9efba29f73f233c3ef8b@ec2-52-45-73-150.compute-1.amazonaws.com:5432/d54n3cf1sf38rj'
});

// exports.client = new Client({
//   // connectionString: 'http://127.0.0.1:11562/?key=a7422cd2-e52c-4cf5-a982-8d90f787f501', //
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });


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
