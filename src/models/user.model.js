const sql = require("./db.js");

// constructor
const User = function(User) {
    this.UserID = User.UserID;
    this.UserName = User.UserName;
    this.FirstName = User.FirstName;
    this.LastName = User.LastName;
    this.EmailID = User.EmailID;
    this.BluetoothID = User.BluetoothID
};

User.create = (newUser, result) => {
  console.log(newUser)
    sql.query("INSERT INTO User SET ?", newUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created user: ", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
};

User.findById = (userId, result) => {
    sql.query(`SELECT * FROM User WHERE UserID = ${userId}`, (err, res) => {
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

User.getAll = result => {
    sql.query("SELECT * FROM User", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("User: ", res);
      result(null, res);
    });
};

User.remove = (id, result) => {
    sql.query("DELETE FROM User WHERE UserID = ?", id, (err, res) => {
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

User.removeAll = result => {
    sql.query("DELETE FROM User", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} User`);
      result(null, res);
    });
  };
  
module.exports = User;
  
  