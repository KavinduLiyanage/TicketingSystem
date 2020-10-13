const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Buses Model
const busSchema = new Schema(
  {
    regNo: { type: String, required: true, unique: true, trim: true },
    driverName: { type: String, required: true, trim: true },
    Capacity: { type: Integer, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Bus = mongoose.model("Bus", busSchema);

//Export User
module.exports = Bus;
