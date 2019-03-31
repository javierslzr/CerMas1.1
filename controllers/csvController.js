const db = require("../models");
var mongodb = require("mongodb");

module.exports = {
  findAll: function (req, res) {
    db.Csv
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body.data.userId)
    db.Csv
      .create(req.body.data)
      .then(function (dbCsv) {
        console.log(dbCsv)
        return db.User.findOneAndUpdate({ _id: req.body.data.userId }, { $push: { tables: dbCsv._id } }, { new: true });
        // return db.User.findOneAndUpdate({ email: req.user.email }, { $push: { tables: dbModel._id } }, { new: true });
      })
      .catch(function (err) {
        // If an error occurs, send it back to the client
        console.log(err);
        res.json(err);
      });
  },

  populate: function (req, res) {
    db.User.find({})
      // Specify that we want to populate the retrieved users with any associated notes
      .populate("csv")
      .then(function (dbUser) {
        // If able to successfully find and associate all Users and Notes, send them back to the client
        res.json(dbUser);
      })
      .catch(function (err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  }

}



//-------------------------------------------------------
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'finalclassproject';

// // Create a new MongoClient
// const client = new MongoClient(url);

// // Use connect method to connect to the Server
// client.connect(function (err, client) {
//   if (err) throw err;
//   console.log("Connected correctly to server csv");

//   const db = client.db(dbName);

//   // Insert a single document
//   db.collection('inserts').insertOne({ a: 1 }, function (err, r) {
//     assert.equal(null, err);
//     assert.equal(1, r.insertedCount);

//     // Insert multiple documents
//     const data = [{ a: 2 }, { a: 3 }];
//     db.collection('inserts').insertMany(data, function (err, r) {
//       assert.equal(null, err);
//       assert.equal(2, r.insertedCount);

//       client.close();
//     });
//   });
// });