module.exports = app => {
    const Users = require("../controllers/user.controller.js");
  
    // Create a new Customer
    app.post("/users", Users.create);
  
    // Retrieve all Customers
    app.get("/users", Users.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/users/:UserID", Users.findOne);
  
    // Update a Customer with UserID
    app.put("/users/:UserID", Users.update);
  
    // Delete a Customer with UserID
    app.delete("/users/delete/:UserID", Users.delete);
  
    // Create a new Customer
    app.delete("/users/deleteAll", Users.deleteAll);
  };
  