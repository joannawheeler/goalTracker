var Q = require('q');
var Question = require('./questionModel.js');


var findAllQuestions = Q.nbind(Question.find, Question);
var createQuestion = Q.nbind(Question.create, Question);
var findQuestionById = Q.nbind(Question.findById, Question);
var removeQuestion = Q.nbind(Question.remove, Question);


module.exports = {

  getAllQuestions: function(req, res, next) {
    findAllQuestions()
    .then(function(allQuestions) {
      res.json(allQuestions);
    })
    .fail(function(err) {
      next(err);
    })
   },

  postOneQuestion: function(req, res, next) {
    var newQuestion = {question: req.body.question};
    return createQuestion(newQuestion)
    .then(function(createdQuestion) {
      res.json(createdQuestion);
    })
    .fail(function(err) {
      next(err);
    })
  },

  getAnswerToQuestion: function(req, res, next) {
    findQuestionById(req.params.id)
    .then(function(question){
      if (question.answer) {
        res.json(question.answer);
      } else {
        res.json("this question has not been answered yet")
      }
    })
    .fail(function(err) {
      next(err);
    })
  },

  updateAnswer: function(req, res, next) {
    findQuestionById(req.params.id)
    .then(function(question) {
      question.answer = req.body.answer;
      return question.save();
    })
    .then(function(updatedQuestion) {
      res.json(updatedQuestion);
    })
    .fail(function(err) {
      next(err);
    })
  },

  deleteQuestion: function(req, res, next) {
    findQuestionById(req.params.id)
    .then(function(question) {
      return question.remove();
    })
    .then(function(removedQuestion) {
      res.json(removedQuestion);
    })
    .fail(function(err){
      next(err);
    })
  }

}