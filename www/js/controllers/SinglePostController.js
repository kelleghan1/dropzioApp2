angular.module('dropzio')
.controller('SinglePostController', function(
  $state,
  $log,
  SignupService,
  $scope,
  $stateParams,
  ListService
){

  $stateParams.postId;
  $scope.postList;
  $scope.currentPost;

  ListService.getPosts()
  .then(function(result){
    $scope.postList = result;
    $scope.currentPost =
    $scope.postList.filter(function(obj){
      if (obj.id == $stateParams.postId){
        return true
      }
    })
    console.log($scope.currentPost);
  })



})
