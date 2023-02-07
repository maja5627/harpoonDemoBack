const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./services/records.controller"));
const config = require ('./config.json');

 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

if(process.env.MONGOCONNECTION) {
  console.log('got override for monogo connection sring');
  config.connectionString = proccess.env.MONGOCONNECTION;
}