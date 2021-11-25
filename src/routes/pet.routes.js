module.exports = app => {
    const Pets = require("../controllers/pet.controller.js");
  
    // Create a new Customer
    app.post("/pets", Pets.create);
  
    // Retrieve all Customers
    app.get("/pets", Pets.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/pets/:PetID", Pets.findOne);
  
    // Update a Customer with PetID
    app.put("/pets/:PetID", Pets.update);
  
    // Delete a Customer with PetID
    app.delete("/pets/delete/:PetID", Pets.delete);

    app.delete("/pets/deleteAll", Pets.deleteAll);
  };