const mongoose = require('mongoose');
const Payment = require('./api/models/Payments');

mongoose.connect('mongodb+srv://azka0012:azka0012@cluster0.zkzipyr.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const order = new Payment({
  createdAt: new Date("2024-06-01T10:30:00.000Z"),
  transactionId: "TRX123456789",
  price: 50000,
  status: "completed",
  email: "azkafajril@gmail.cm"
});

order.save()
  .then(() => {
    console.log('Order inserted!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    mongoose.disconnect();
  });