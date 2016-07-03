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
    },

    sendScore: function(postObj){
      var deferred = $q.defer();
      $http.post('https://dropzio-server.herokuapp.com/changescore', postObj)
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
