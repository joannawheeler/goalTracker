angular.module('quan.services', [])

//the factory creates an object that handles making calls to the server
.factory('Questions', function ($http) {

    var getAllQuestions = function() {
    return $http({
      method: 'GET',
      url: 'api/questions/'
    })
    .then(function (resp) {
      // console.log(resp.data);
      return resp.data;
    });
  };

    var postQuestion = function(newQuestion) {
    return $http({
      method: 'POST',
      url: 'api/questions/',
      data: {question: newQuestion}
    })
    .then(function (resp) {
      // console.log(resp.data);
      return resp.data;
    });
  };

    var delQuestion = function(id) {
    return $http({
      method: 'DELETE',
      url: 'api/questions/'+id,
    })
    .then(function (resp) {
      // console.log(resp.data);
      return resp.data;
    });
  };

    var editAns = function(id, dataT) {
    return $http({
      method: 'PUT',
      url: 'api/questions/'+id,
      data: {answer: dataT}
    })
    .then(function (resp) {
      // console.log(resp.data);
      return resp.data;
    });
  }

    var getAns = function(id) {
    return $http({
      method: 'GET',
      url: 'api/questions/'+id,
    })
    .then(function (resp) {
      // console.log(resp.data);
      return resp.data;
    });
  }

  return {
    getAllQuestions: getAllQuestions,
    //change to addLink
    // addOne: addOne
    postQuestion: postQuestion,
    editAns: editAns,
    delQuestion: delQuestion,
    getAns: getAns
  };


});