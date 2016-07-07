angular.module('dropzio')

.service('CompassService', function($q, $http){

  return {

    getNearbyPosts: function (locationObj){
      var deferred = $q.defer();
      $http.post('https://dropzio-server.herokuapp.com/compass', locationObj)
      .then(function(res){
        deferred.resolve(res)
      })
      .catch(function(error){
        deferred.reject(error)
      })
      return deferred.promise;
    }


  }




});
