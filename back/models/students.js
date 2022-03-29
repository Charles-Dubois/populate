const mongoose = require("mongoose");

const studentsSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  surname: { type: String, required: true },
  address: [{ type: mongoose.Types.ObjectId, ref: "adresses" }],
});

const Student = mongoose.model("students", studentsSchema);

module.exports = Student;
