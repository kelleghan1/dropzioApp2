angular.module('dropzio')
.controller('LoginController', function(LoginService, $scope, $state, $log){

  $scope.userObj = {
    user: {
      'userName': null,
      'password': null,
      'lat': null,
      'long': null
    }
  }

  $scope.loginFormSubmit = function() {

    $scope.userObj.user.userName = $scope.userObj.user.userName.toLowerCase();
    LoginService.login($scope.userObj)
    .then(function(success){
      localStorage.setItem('id', success.data.id);
      localStorage.setItem('username', success.data.name)
      localStorage.setItem('password', success.data.password)
      console.log(success);
      $state.go('tabs.list')
    })

    .catch(function(err){
      $state.go('login')
    })
  }


})
