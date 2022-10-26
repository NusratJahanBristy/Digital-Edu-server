const express = require("express")
const app = express();
const Port = process.env.Port || 5000;

app.get('/', (req, res) => {
    res.send("digital edu server is running");
  });
  
  app.listen(Port, () => {
    console.log("digital edu server is running", Port);
  });