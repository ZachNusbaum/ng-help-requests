const mongoose = require('mongoose');
const HelpRequestSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  subject: String,
  message: {
    type: String,
    required: true
  },
  urgent: {
    type: Boolean,
    required: true
  }
});

const HelpRequest = module.exports = mongoose.model('HelpRequest', HelpRequestSchema);

module.exports.getAll = (callback) => {
  HelpRequest.find(callback);
};

module.exports.addNew = (newRequest, callback) => {
  newRequest.save(callback);
};