const express = require("express");
const app = express();
const fs = require('fs');
const cors = require('cors')

const PORT = 5000;

app.listen(process.env.PORT || PORT, () => {
 console.log(`Server running on port ${PORT}`);
});

app.get("/", cors(), (req, res, next) => {
  let rawdata = fs.readFileSync('data.json');
  let users = JSON.parse(rawdata);
  if(users){
    res.status(200)
    res.json( users);
  } else{
    res.status(500).send('Internal Server Error');
  }
 });