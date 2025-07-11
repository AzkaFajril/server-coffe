const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Payment = require('../models/Payments');
const Cart = require('../models/Carts');
const ObjectId = mongoose.Types.ObjectId;


//token

const verifyToken = require('../middleware/verifyToken');
const paymentControllers = require('../controllers/paymentControllers');

// post payment informatio to database
router.post('/', paymentControllers.createPayment);

//get all order details
router.get('/', verifyToken, async (req, res) => {
    const email = req.query.email;
    const query = email ? { email: email } : {};
    try {
        const decodedEmail = req.decoded.email;
        if (email && email !== decodedEmail) {
            return res.status(403).json({ message: "Unauthorized" });
        }
        const result = await Payment.find(query).sort({ createdAt: -1 }).exec();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get('/admin-stats', verifyToken, async (req, res) => {
    try {
        const totalOrders = await Payment.countDocuments();
        const totalRevenue = await Payment.aggregate([
            { $group: { _id: null, total: { $sum: "$price" } } }
        ]);

        res.status(200).json({
            totalOrders,
            totalRevenue: totalRevenue.length > 0 ? totalRevenue[0].total : 0
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




module.exports = router;