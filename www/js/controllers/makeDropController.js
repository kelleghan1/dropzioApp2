angular.module('dropzio')
.controller('MakeDropController', function(
  $q,
  $http,
  $state,
  $scope,
  SendPhotoService,
  MakeDropService,
  $cordovaGeolocation,
  $firebaseArray,
  $cordovaCamera
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
  $scope.picTaken = true;

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
      MakeDropService.drop($scope.postObj)
      .then(function(result){
        if ($scope.picTaken) {
          SendPhotoService.send(
            // {
            // id: result.data.id,
            $scope.pictureData
            // }
          )

          // console.log('ctrl id', result.data.id);
        }
      })
    })

    $scope.postObj.post.title = '';
    $scope.postObj.post.content = '';
    $state.go('tabs.list')
  }

})
