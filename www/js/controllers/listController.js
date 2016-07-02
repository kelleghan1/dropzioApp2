angular.module('dropzio')
.controller('ListController', function($state, $scope, ListService){

  $scope.postList;



  ListService.getPosts()
  .then(function(result){


    console.log(result);
    $scope.postList = result;



  })

})
