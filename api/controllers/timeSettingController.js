const TimeSetting = require('../models/TimeSetting');

// Get current time setting
exports.getTimeSetting = async (req, res) => {
  try {
    let setting = await TimeSetting.findOne();
    if (!setting) {
      // Default jika belum ada
      setting = await TimeSetting.create({ openHour: 8, closeHour: 22 });
    }
    res.json(setting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update time setting
exports.updateTimeSetting = async (req, res) => {
  try {
    const { openHour, closeHour } = req.body;
    let setting = await TimeSetting.findOne();
    if (!setting) {
      setting = await TimeSetting.create({ openHour, closeHour });
    } else {
      setting.openHour = openHour;
      setting.closeHour = closeHour;
      await setting.save();
    }
    res.json(setting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Set manual open/close
exports.setManualClose = async (req, res) => {
  try {
    const { isManuallyClosed } = req.body;
    let setting = await TimeSetting.findOne();
    if (!setting) {
      setting = await TimeSetting.create({ openHour: 8, closeHour: 22, isManuallyClosed });
    } else {
      setting.isManuallyClosed = isManuallyClosed;
      await setting.save();
    }
    res.json(setting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
