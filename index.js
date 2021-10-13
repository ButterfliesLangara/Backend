import express from "express";
import routes from "./src/routes/Route";
import stripe from 'stripe'
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;



// bodyparser setup

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);


app.listen(PORT, () => {
  console.log(`${PORT}`);
});
