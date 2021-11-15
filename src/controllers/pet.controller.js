const Pet = require("../models/pet.model.js");

exports.create = (req, res) => {
   if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    };
    const pet = new Pet({
        PetID : req.body.PetID,
        Breed : req.body.Breed,
        Age : req.body.Age,
        Weight : req.body.Weight,
        Picture : req.body.Picture,
        NumberOfSteps : req.body.NumberOfSteps,
        UserID : req.body.UserID,
        Distance: req.body.Distance,
        Duration: req.body.Duration
    });
    Pet.create(pet, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Pets."
          });
        else res.send(data);
    });
}

// Retrieve all Pets from the database.
exports.findAll = (req, res) => {
    Pet.getAll((err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

// Find a single Pet with a customerId
exports.findOne = (req, res) => {
    Pet.findById(req.params.PetID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Pet with id ${req.params.UserID}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Pet with id " + req.params.UserID
            });
          }
        } else res.send(data);
      });
};

    // Update a Pet identified by the customerId in the request
    exports.update = (req, res) => {
        // Validate Request
        if (!req.body) {
            res.status(400).send({
            message: "Content can not be empty!"
            });
        }

        User.updateById(
            req.params.UserID,
            new User(req.body),
            (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Pet with id ${req.params.UserID}.`
                });
                } else {
                res.status(500).send({
                    message: "Error updating Pet with id " + req.params.UserID
                });
                }
            } else res.send(data);
            }
        );
    };

    // Delete a Pet with the specified customerId in the request
    exports.delete = (req, res) => {
        Pet.remove(req.params.PetID, (err, data) => {
            if (err) {
              if (err.kind === "not_found") {
                res.status(404).send({
                  message: `Not found Pet with id ${req.params.customerId}.`
                });
              } else {
                res.status(500).send({
                  message: "Could not delete Pet with id " + req.params.customerId
                });
              }
            } else res.send({ message: `Pet was deleted successfully!` });
        });
    };

    // Delete all Pets from the database.
    exports.deleteAll = (req, res) => {
        Pet.removeAll((err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while removing all customers."
              });
            else res.send({ message: `All Pets were deleted successfully!` });
        });
    };