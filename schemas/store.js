const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true},
  username: { type: String, required: true},
  amount: {
    type: Number,
    required: true,
    default: 0
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('Store', storeSchema);