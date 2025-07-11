const express = require("express");
const router = express.Router();
const bookingControllers = require("../controllers/bookingControllers");

router.get("/", bookingControllers.getAllBookings);
router.post("/", bookingControllers.createBooking);
router.patch("/:id", bookingControllers.updateBooking);
router.delete("/:id", bookingControllers.deleteBooking);

module.exports = router;
