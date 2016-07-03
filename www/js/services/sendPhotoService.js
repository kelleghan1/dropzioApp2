angular.module('dropzio')

.service('SendPhotoService', function($q, $http, $firebaseArray){

  return {

    send: function (picObj){
      console.log('preballs');
      function balls($scope, $firebaseArray) {
        console.log('balls');
        var imagesRef = new Firebase("https://imageuploadangularfirebase.firebaseio.com/images");
        $scope.images = $firebaseArray(imagesRef);

        $scope.addImage = function(picObj) {
          $scope.images.$add(picObj)
          .then(function(data){
            console.log('endservice', data);
          })
        }
      }

    }
  }




});
