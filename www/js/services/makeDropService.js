angular.module('dropzio')

.service('MakeDropService', function($q, $http){

  return {

    drop: function (userObj){
      var deferred = $q.defer();
      $http.post('https://dropzio-server.herokuapp.com/posts', userObj)
      .then(function(success){
        deferred.resolve(success)
      })
      .catch(function(error){
        deferred.reject(error)
      })
      console.log('deferred', deferred.promise);
      return deferred.promise;
    }

  }

});
