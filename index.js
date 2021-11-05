const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Stepaw application." });
});

require("./src/routes/user.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});



