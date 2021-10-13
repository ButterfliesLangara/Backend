import tempController from "../controllers/tempController";
import checkouthandler from "../controllers/Checkout";

const routees = (app) => {
  app.route("/").get(tempController);
};

export default routees;
