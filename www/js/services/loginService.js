angular.module('dropzio')

.service('LoginService', function($http, $q){

  return {

    login: function (userObj){
      var deferred = $q.defer();
      $http.post('https://dropzio-server.herokuapp.com/login', userObj)
      .then(function(success){
        deferred.resolve(success)
      })
      .catch(function(error){
        deferred.reject(error)
      })
      return deferred.promise;
    }

  }




});
