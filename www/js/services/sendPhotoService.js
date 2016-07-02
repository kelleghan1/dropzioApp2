angular.module('dropzio')

.service('SendPhotoService', function($q, $http){

  return {

    send: function (picObj){





      function upload($scope, $firebaseArray) {
        var imagesRef = new Firebase("https://imageuploadangularfirebase.firebaseio.com/images");
        $scope.images = $firebaseArray(imagesRef);

        $scope.addImage = function(image) {
          $scope.images.$add({image: image}).then(function(data){
          })
        }
      }







    }

  }

});
