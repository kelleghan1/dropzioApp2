angular.module('dropzio')
.controller('ListController', function($state, $scope, ListService){

  $scope.postList;

  ListService.getPosts()
  .then(function(result){
    $scope.postList = result;
  })

  $scope.postScore = function(postId, score){

    $scope.scoreObj = {
      post: {
        postId: postId,
        score: score
      }
    }

    ListService.sendScore($scope.postObj)
    .then(function(result){
      console.log(result);
    }

  }


})
