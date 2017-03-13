
angular.module('quan.questions', [])

.controller('QuestionsController', function ($scope, Questions) {
  // $scope.questions = [1, 2, 3];

  $scope.questions = [];
  $scope.answers = [];
  Questions.getAllQuestions()
  .then(function(questions) {
    $scope.questions = questions;
  })



  $scope.newQuestion = "";
  $scope.postQuestion = function() {
    // console.log("being called")
    Questions.postQuestion($scope.newQuestion)
    .then(function() {
      // console.log("made it to dot then")
      $scope.questions.unshift({question: $scope.newQuestion})
    })
  }



  $scope.deleteQuestion = function(questionObject, index) {
   // console.log(questionObject + index)
    Questions.delQuestion(questionObject._id)
    .then(function() {
      $scope.questions.splice(index, 1);
    })
  }

  $scope.editAnswer = function(questionObject, index) {
    Questions.editAns(questionObject._id, $scope.answers[index])
    .then(function(resp) {
      console.log(resp)
    })
  }

  $scope.getAnswer = function(question) {
    Questions.getAns(question._id)
    .then(function(resp) {
      question.theAnswer = resp;
    })
  }
})