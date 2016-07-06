angular.module('dropzio')
.controller('SinglePostController', function(
  $state,
  $log,
  SignupService,
  $scope,
  $stateParams,
  ListService,
  $firebaseArray
){

  $stateParams.postId;
  $scope.postList;
  $scope.currentPost;
  $scope.currentImage;

  ListService.getPosts()
  .then(function(result){
    $scope.postList = result;
    $scope.currentPost =
    $scope.postList.filter(function(obj){
      if (obj.id == $stateParams.postId){
        return true
      }
    })
  })

  var imagesRef = new Firebase("https://imageuploadangularfirebase.firebaseio.com/images");
  $scope.images = $firebaseArray(imagesRef);



})
