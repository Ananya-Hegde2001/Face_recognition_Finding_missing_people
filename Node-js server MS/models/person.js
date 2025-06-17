const mongoose = require("mongoose");
const { Schema } = mongoose;

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  Gender: {
    type: String
  },
  identification: {
    type: String
  },
  nationality: {
    type: String
  },
  height: {
    type: mongoose.Schema.Types.Decimal128
  },
  Date_missing: {
    type: Date
  },
  address: {
    type: String
  },
  adhaar_number: {
    type: String,
    unique: true
  },
  image: {
    data: Buffer,
    contentType: String
  },
  phonenumber: {
    type: Number
  }
}, { autoIndex: false }); // 🔧 Disable automatic indexing

const person = mongoose.model("person", personSchema);

// ❌ REMOVE this: person.createIndexes();

module.exports = person;
