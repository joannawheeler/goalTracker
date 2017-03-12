var questionController = require('./questions/questionController.js');

module.exports = function (app, express) {
//retrieve all questions
  app.get('/api/questions', questionController.getAllQuestions);

  //add a question
  app.post('/api/questions', questionController.postOneQuestion);

  //get answer by first getting its id
  app.get('/api/questions/:id', questionController.getAnswerToQuestion);

  //update a question by first getting its id
  app.put('/api/questions/:id', questionController.updateAnswer)

  //delete a question
  app.delete('/api/questions/:id', questionController.deleteQuestion);
}