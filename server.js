require("dotenv").config();
const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets - this is just temporary
//     I kinda forgot how to do it
app.use(express.static("public"));

// Routes
app.use(routes);

// start server
app.listen(PORT, function() {
    console.log(`👊🏻 ==> API server now listening on PORT ${PORT}!`);
})