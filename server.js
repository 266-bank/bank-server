require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const server = require("./ServerConnect");

const app = express();
const PORT = process.env.PORT || 3000;

server.client.connect().then(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
})


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

app.use(function (error, req, res, next) {
    if(error instanceof SyntaxError){ //Handle SyntaxError here.
        return res.status(500).send({data : "Invalid data"});
    } else {
        next();
    }
});

