//initializing express here

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

//import candles API
const candles = require("./candlesApi");
const { response } = require("express");

//set up port

app.use(express.json());

app.listen(5000, () => {
  console.log("Api has started successfully on port 5000");
});

//set up a simple route

app.get("/candles", (req, res) => {
  try {
    res.json(candles);
  } catch (error) {
    console.log(error);
  }
});
