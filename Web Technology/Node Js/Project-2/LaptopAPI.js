const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const Laptop = require("./Model/Laptop");

mongoose.connect("mongodb://127.0.0.1:27017/Products").then(() => {
  const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());

  app.get("/", (req, res) => {
    res.send("<h1>Hello From World</h1>");
  });

  app.get("/laptops", async (req, res) => {
    const data = await Laptop.find();
    res.send(data);
  });

  app.get("/laptops/:id", async (req, res) => {
    const data = await Laptop.findOne({ LaptopID: req.params.id });
    res.send(data);
  });

  app.listen(2001, (req, res) => {
    console.log("Server Started at @ 2001");
  });
});
