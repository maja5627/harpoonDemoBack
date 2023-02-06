
const mongoose = require('mongoose');
const config = require('../config.json')
const connectionString = config.connectionString;

const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

const connectWithRetry = () => {
  console.log('MongoDB connection with retry',connectionString)

  mongoose.connect(connectionString, options).then(()=>{
      console.log('MongoDB is connected');
  }).catch(err=>{
      console.log('MongoDB connection unsuccessful, retry after 4 seconds.');
      setTimeout(connectWithRetry, 4000)
  })
};

connectWithRetry();

module.exports = {
  Records: require('../services/records.model'),
};