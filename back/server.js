const express = require("express");
const mongoose = require("mongoose");
const { find } = require("./models/students");
const mongoKey = require("./private/mongoKey");
const Address = require("./models/address");
const Student = require("./models/students");
const app = express();
const PORT = 8000;
app.use(express.json());

mongoose
  .connect(mongoKey, { useNewUrlParser: true })
  .then(console.log("connection to mongo DB done !"))
  .catch((err) => console.log(err));

app.get("/address", async (_req, res) => {
  let addressID;
  try {
    addressID = await Address.find().select("id");
    addressID = addressID[0].id;
  } catch (err) {
    console.log(err);
    return res.status(400).send("bad request 400");
  }

  res.json(addressID);
});

app.get("/students", async (_req, res) => {
  let student;
  try {
    student = await Student.find();
  } catch (err) {
    console.log(err);
    return res.status(400).send("bad request 400");
  }

  res.json(student);
});
app.post("/students", async (req, res) => {
  try {
    await Student.create(req.body);
  } catch (err) {
    console.log(err);
    return res.status(400).send("bad request 400");
  }

  res.status(201).json({ message: "created" });
});

app.listen(PORT, () => {
  console.log(`linsten on port ${PORT}`);
});
