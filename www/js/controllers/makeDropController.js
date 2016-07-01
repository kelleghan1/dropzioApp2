angular.module('dropzio')
.controller('MakeDropController', function($q, $http, $state, $scope, MakeDropService, $cordovaCamera, $cordovaGeolocation){

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

  $scope.pictureUrl;
  $scope.picTaken = false;

  // $scope.takePicture = function() {
  //
  //   var options = {
  //     destinationType: Camera.DestinationType.DATA_URL,
  //     encodingType: Camera.EncodingType.JPEG,
  //     quality: 100,
  //   };
  //
  //   $cordovaCamera.getPicture(options)
  //   .then(function(data){
  //     // console.log('camera data ' + angular.toJson(data));
  //     $scope.pictureUrl = "data:image/jpeg;base64," + data;
  //     // $scope.pictureData = data;
  //     $scope.picTaken = true;
  //   }, function(error) {
  //     console.log('camera error ' + angular.toJson(error));
  //   });
  //
  // };


  $scope.takeLocation = function() {

    var posOptions = {
      timeout: 10000, enableHighAccuracy: false
    };

    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      console.log('position');
      $scope.postObj.post.long = position.coords.longitude;
      $scope.postObj.post.lat = position.coords.latitude;
    }, function(err) {
      console.log('err',err);
    });
  }


  $scope.makeDropFormSubmit = function(){


    if ($scope.picTaken = true) {
      $scope.postObj.post.imgURL = 'True';
    } else {
      $scope.postObj.post.imgURL = 'False';
    }


    MakeDropService.drop($scope.postObj)
    .then(function(result){
      console.log(result);

    })


    $state.go('tabs.list')
  }







})
