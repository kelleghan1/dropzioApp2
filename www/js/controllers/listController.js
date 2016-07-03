angular.module('dropzio')
.controller('ListController', function($state, $scope, ListService){

  $scope.postList;



  ListService.getPosts()
  .then(function(result){
    $scope.postList = result;
  })

})
