const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  bookingDate: { type: String, required: true }, // format: YYYY-MM-DD
  time: { type: Number, required: true },        // format: 0-24, misal 13.00
  period: { type: String, enum: ["AM", "PM"], required: true },
  tableNo: { type: Number, required: true }
});

module.exports = mongoose.model("Booking", bookingSchema);
