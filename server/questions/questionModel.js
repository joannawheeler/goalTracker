var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  answer: {
    type: String
  }
});



var Question = module.exports = mongoose.model('questions', QuestionSchema);

