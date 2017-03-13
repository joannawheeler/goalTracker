angular.module('quan', [
  'quan.questions',
  'quan.services',
  'ngRoute'
  ])

.config(function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'QuestionsController',
    templateUrl: './questions/questions.html'
  })
  .otherwise({
  redirectTo: '/'
  })
})
