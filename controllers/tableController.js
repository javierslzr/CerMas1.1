const db = require("../models");
var mongodb = require("mongodb");

module.exports = {
  findAll: function(req, res) {
    const { tableData } = req.body;
    console.log(req.body);
    db.Csv.find(tableData)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

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
