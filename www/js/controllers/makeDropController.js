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
  $scope.testCam = 'newtest'

  $scope.takePhoto = function() {

    var options = {
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
      quality: 100
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

    var posOptions = {
      timeout: 10000, enableHighAccuracy: true
    };

    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      $scope.postObj.post.long = position.coords.longitude;
      $scope.postObj.post.lat = position.coords.latitude;
    }, function(err) {
      console.log('err',err);
    })
    .then(function(done){

      if ($scope.picTaken) {

        $scope.picPackage = {
          image:
          // 'picdata'
          $scope.pictureData
        }

        var imagesRef = new Firebase("https://imageuploadangularfirebase.firebaseio.com/images");
        $scope.images = $firebaseArray(imagesRef)
        $scope.addImage = function(picObj) {
          return $scope.images.$add(picObj)
        }

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
          $state.go('tabs.list')
        })

      } else {
        MakeDropService.drop($scope.postObj)
        .then(function(done){
          $scope.postObj.post.title = '';
          $scope.postObj.post.content = '';
          $state.go('tabs.list')
        })
      }

    })
  }







})
