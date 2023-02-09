const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use(require("./routes/record"));
const dbo = require("./db/conn");
const config = require ('./config.json');

 
app.listen(port, () => {
  dbo.connectWithRetry(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

if(process.env.MONGOCONNECTION) {
  console.log('got override for monogo connection sring', process.env.MONGOCONNECTION);
  config.connectionString = process.env.MONGOCONNECTION;
}