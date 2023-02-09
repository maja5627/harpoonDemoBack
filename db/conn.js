
const mongoose = require('mongoose');
const config = require('../config.json');
const { MongoClient } = require("mongodb");
var _db;
const client = new MongoClient(config.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};
module.exports = {

  connectWithRetry: function (callback) {
  const connectionString = config.connectionString;
  console.log('MongoDB connection with retry',connectionString)

  client.connect(function (err,db) {
    if (db)
    {
      _db = db.db("harpoondemo");
      console.log("Successfully connected to MongoDB."); 
    }
    return callback(err);
  });
  },
 
  getDb: function () {
    return _db;
  },
};