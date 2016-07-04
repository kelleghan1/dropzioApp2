angular.module('dropzio')
.controller('ListController', function($state, $scope, ListService, $firebaseArray){

  $scope.postList;

  ListService.getPosts()
  .then(function(result){
    $scope.postList = result;
  })

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


})
