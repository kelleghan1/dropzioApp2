angular.module('dropzio')




.service('LoginService', function($http, $q){

  return {

    login: function (userObj){
      console.log('inService', userObj);
      var deferred = $q.defer();
      $http.post('https://dropzio-server.herokuapp.com/login', userObj)
      .then(function(success){
        console.log('success', userObj);
        deferred.resolve(success)
      })
      .catch(function(error){
        deferred.reject(error)
      })
      return deferred.promise;
    }

  }




});
