angular.module('dropzio')
.controller('ListController', function(
  $state,
  $scope,
  ListService,
  $firebaseArray,
  $cordovaGeolocation,
  $interval
){

  $scope.postList;
  // $scope.currentUserId = localStorage.getItem('id');

  $interval(function(){

    var posOptions = {
      timeout: 10000, enableHighAccuracy: true
    };

    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      console.log('interval1');
      ListService.sendLocation(
        {
          user: {
            lat: position.coords.latitude,
            long: position.coords.longitude
          }
        }
      )
    }, function(err) {
      console.log('err',err);
    })
    .then(function(done){
      ListService.getPosts()
      .then(function(result){
        console.log('interval2');
        $scope.postList = result;
      })
    })

  }, 5000)


  $scope.endEvent = function($event){
    $event.stopPropagation();
  }

  $scope.postScore = function(postId, score, $event){
    $event.stopPropagation();
    $scope.scoreObj = {
      "post": {
        "postId": postId,
        "score": score
      }
    }

    this.post.score += score;
    ListService.sendScore($scope.scoreObj)
    .then(function(result){
      console.log(result);
    })
  }

  var imagesRef = new Firebase("https://imageuploadangularfirebase.firebaseio.com/images");
  $scope.images = $firebaseArray(imagesRef);

})
