require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/user-api-routes")(app);
require("./routes/bank-api-routes")(app);

// some code to start the server here
// ...

module.exports = app;