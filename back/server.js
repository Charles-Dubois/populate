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

app.get("/", async (_req, res) => {
  res.json({ message: "API students", post: "/", post: "/student" });
});

app.post("/", async (req, res) => {
  let addressID;
  try {
    addressID = await Address.create(req.body.address);
    addressID = addressID.id;
    req.body.student.address = addressID;
  } catch (err) {
    console.log(err);
    return res.status(400).send("bad request 400");
  }

  try {
    await Student.create(req.body.student);
  } catch (err) {
    console.log(err);
    return res.status(400).send("bad request 400");
  }

  res.status(201).json({ message: "created" });
});

app.post("/student", async (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`linsten on port ${PORT}`);
});
