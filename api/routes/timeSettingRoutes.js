const express = require('express');
const router = express.Router();
const timeSettingController = require('../controllers/timeSettingController');
const { getTimeSetting, updateTimeSetting } = require('../controllers/timeSettingController');

// GET: /api/time-setting
router.get('/', getTimeSetting);

// PUT: /api/time-setting
router.put('/', updateTimeSetting);

// Set manual open/close
router.patch('/manual-close', timeSettingController.setManualClose);

module.exports = router;
