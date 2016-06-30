angular.module('dropzio')
.controller('LoginController', function($scope, $state){


  $scope.login = function(){
    $state.go('tabs.list')
  }


})
