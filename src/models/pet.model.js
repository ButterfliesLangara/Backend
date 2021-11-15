const sql = require("./db.js");

// constructor
const Pet = function(Pet) {
    this.PetID = Pet.PetID;
    this.Breed = Pet.Breed;
    this.Age = Pet.Age;
    this.Weight = Pet.Weight;
    this.Gender = Pet.Gender;
    this.Picture = Pet.Picture;
    this.NumberOfSteps = Pet.NumberOfSteps;
    this.Distance = Pet.Distance;
    this.Duration = Pet.Duration;
    this.UserID = Pet.UserID;
};

Pet.create = (newPet, result) => {
    sql.query("INSERT INTO Pets SET ?", newPet, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created pets: ", { id: res.insertId, ...newPet });
      result(null, { id: res.insertId, ...newPet });
    });
};

Pet.findById = (userId, result) => {
    sql.query(`SELECT * FROM Pets WHERE PetID = ${userId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found customer: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
};

Pet.getAll = result => {
    sql.query("SELECT * FROM Pets", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Pets: ", res);
      result(null, res);
    });
};

Pet.remove = (id, result) => {
    sql.query("DELETE FROM Pets WHERE PetID = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted customer with id: ", id);
      result(null, res);
    });
};

Pet.removeAll = result => {
    sql.query("DELETE FROM Pets", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} User`);
      result(null, res);
    });
  };
  
module.exports = Pet;
  
  