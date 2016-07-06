angular.module('dropzio')
.controller('MakeDropController', function(
  $q,
  $http,
  $state,
  $scope,
  MakeDropService,
  $cordovaGeolocation,
  $cordovaCamera,
  $firebaseArray
  // SendPhotoService
){

  $scope.postObj = {
    post: {
      lat: null,
      long: null,
      imgURL: null,
      title: null,
      content: null,
      score: 1,
      follow: false,
      user_id: localStorage.getItem('id')
    }
  }

  $scope.pictureData;
  $scope.picTaken = false;

  $scope.takePhoto = function() {

    var options = {
      allowEdit : true,
      targetWidth: 500,
      targetHeight: 500,
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
      quality: 60
    };

    $cordovaCamera.getPicture(options)
    .then(function(data){
      $scope.pictureData = "data:image/jpeg;base64," + data;
      $scope.picTaken = true;
    }, function(error) {
      console.log('camera error ' + angular.toJson(error));
    });

  };

  $scope.makeDropFormSubmit = function(){

    var watchOptions = {
      timeout: 3000,
      enableHighAccuracy: true
    };

    $cordovaGeolocation
    .getCurrentPosition(watchOptions)
    .then(function (position) {
      $scope.postObj.post.long = position.coords.longitude;
      $scope.postObj.post.lat = position.coords.latitude;
    })
    .then(function(done){

      if ($scope.picTaken) {
        $scope.picPackage = {
          image: $scope.pictureData
        }

        var imagesRef = new Firebase("https://imageuploadangularfirebase.firebaseio.com/images");
        $scope.images = $firebaseArray(imagesRef)
        $scope.addImage = function(picObj) {
          return $scope.images.$add(picObj)
        }
        $state.go('tabs.list')

        $scope.addImage($scope.picPackage)
        .then(function(response){
          $scope.postObj.post.imgURL = response.path.o[1];
        })
        .then(function(done){
          MakeDropService.drop($scope.postObj)
        })
        .then(function(done){
          $scope.postObj.post.title = '';
          $scope.postObj.post.content = '';
          $scope.picTaken = false;
        })

      } else {
        MakeDropService.drop($scope.postObj)
        .then(function(done){
          $scope.postObj.post.title = '';
          $scope.postObj.post.content = '';
          $scope.picTaken = false;
          $state.go('tabs.list')
        })
      }

    })

    if (StatusBar) {
      StatusBar.styleLightContent();
      StatusBar.styleBlackTranslucent();
      StatusBar.styleBlackOpaque();
    }
  }

})
