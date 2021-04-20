require("dotenv").config();
const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use(routes);

// start server
app.listen(PORT, function() {
    console.log(`👊🏻 ==> API server now listening on PORT ${PORT}!`);
})