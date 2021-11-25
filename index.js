const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');
var jwkToPem = require('jwk-to-pem');
var fetch = require('node-fetch');

const app = express();

app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

function validate(req,res,next){
    if(!(req.headers.authorization)){
        res.status(401).send('Please send an authorization token');
    }
    if(req.headers.authorization){
        const token = req.headers.authorization.split(' ')[1];
        const r = validateJwt(token).then(function(data){
            if(data.status=='success'){
                    next();
                    // res.status(200).send("Token Valid");
                } else{
                    res.status(401).send('Invalid token');
            }
        })
    }
}

// app.use(validate)
async function validateJwt(token) {
    // First need to find out which key id is being used, we can get this from the header
    let d = jwt.decode(token,{complete:true});
    let kid = d.header['kid'];
    // Retreive the public keys from google
    data = await fetch('https://www.googleapis.com/oauth2/v3/certs');

    certs = await data.json();

    // Find the correct key
    let key = certs.keys.filter( c => c.kid == kid );

    // we now need to convert the certificate to pem format
    let pem = jwkToPem(key[0]);
    console.log(pem)
    // We use the PEM cert to verify the token is signed by google
    try {
        let result = await jwt.verify(token, pem);
        return {"status":"success",result}
    } catch (e) {
        return JSON.parse(`{ "${e.name}": "${e.message}","status":"failed"}`);
    }
}

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Stepaw application." });
});

require("./src/routes/user.routes.js")(app);
require("./src/routes/pet.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});



