angular.module('dropzio')

.service('ListService', function($q, $http){

  return {

    getPosts: function (){
      var deferred = $q.defer();
      $http.get('https://dropzio-server.herokuapp.com/postlist')
      .then(function(success){
        deferred.resolve(success.data.post)
      })
      .catch(function(error){
        deferred.reject(error)
      })
      return deferred.promise;
    }
  }




});
