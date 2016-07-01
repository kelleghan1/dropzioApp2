angular.module('dropzio')




.service('SignupService', function($http, $q){

  return {

    signup: function (userObj){
      var deferred = $q.defer();
      $http.post('https://dropzio-server.herokuapp.com/users', userObj)
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
