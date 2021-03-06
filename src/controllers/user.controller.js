const User = require("../models/user.model.js");

exports.create = (req, res) => {
   if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    };
    const user = new User({
        UserID : req.body.UserID,
        UserName : req.body.UserName,
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        EmailID : req.body.EmailID,
        BluetoothID : req.body.BluetoothID
    });
    User.create(user, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Customer."
          });
        else res.send(data);
    });
}

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
    User.findById(`'${req.params.UserID}'`, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.UserID}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Customer with id " + req.params.UserID
            });
          }
        } else res.send(data);
      });
};

    // Update a Customer identified by the customerId in the request
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
                    message: `Not found Customer with id ${req.params.UserID}.`
                });
                } else {
                res.status(500).send({
                    message: "Error updating Customer with id " + req.params.UserID
                });
                }
            } else res.send(data);
            }
        );
    };

    // Delete a Customer with the specified customerId in the request
    exports.delete = (req, res) => {
        User.remove(req.params.UserID, (err, data) => {
            if (err) {
              if (err.kind === "not_found") {
                res.status(404).send({
                  message: `Not found Customer with id ${req.params.customerId}.`
                });
              } else {
                res.status(500).send({
                  message: "Could not delete Customer with id " + req.params.customerId
                });
              }
            } else res.send({ message: `Customer was deleted successfully!` });
        });
    };

    // Delete all Customers from the database.
    exports.deleteAll = (req, res) => {
        User.removeAll((err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while removing all customers."
              });
            else res.send({ message: `All Customers were deleted successfully!` });
        });
    };
