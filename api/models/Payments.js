const mongoose = require("mongoose");
const {Schema} = mongoose

const paymentSchema = new Schema({
    transactionId: String,
    email: String,
    price: Number,
    quantity: Number,
    status: String,
    itemName: Array,
    cartItems: Array,
    menuItems: Array,
    tableNo: Number, // nomor meja hasil scan barcode/QR
    createdAt: {
        type: Date,
        default: Date.now
    }
    })

const Payment = mongoose.model('Payment', paymentSchema)
module.exports = Payment