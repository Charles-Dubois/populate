const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  streetName: { type: String, required: true },
  streetNumber: { type: String, required: true },
  postCode: { type: String, required: true },
  city: { type: String, required: true },
});

const Address = mongoose.model("addresses", addressSchema);

module.exports = Address;
