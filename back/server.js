const express = require("express");
const mongoose = require("mongoose");
const mongoKey = require("./private/mongoKey");
const app = express();
const PORT = 8000;
app.use(express.json());

mongoose
  .connect(mongoKey, { useNewUrlParser: true })
  .then(console.log("connection to mongo DB done !"))
  .catch((err) => console.log(err));

app.get("/", (_req, res) => {
  res.send("Hello world !");
});

app.listen(PORT, () => {
  console.log(`linsten on port ${PORT}`);
});
