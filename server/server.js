//initializing express here

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

//import candles API
const candles = require("./candlesApi");

//set up port

app.use(express.json());
//set up a way to send images with express.static

app.use(express.static("images"));

//set up port

const port = 5000;

app.listen(port, () => {
  console.log(`Api has started successfully on port ${port}`);
});

//set up a simple route

app.get("/candles", (req, res) => {
  try {
    res.json(candles);
  } catch (error) {
    console.log(error);
  }
});
