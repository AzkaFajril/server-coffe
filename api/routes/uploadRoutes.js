// server/api/routes/uploadRoutes.js
const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // folder uploads di server
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ url: `http://localhost:5000/uploads/${req.file.filename}` });
});

module.exports = router;
