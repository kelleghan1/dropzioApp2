angular.module('dropzio')
.controller('SignupController', function( $state, $log, SignupService, $scope){

  $scope.userObj = {
    user: {
      'userName': null,
      'password': null,
      'lat': null,
      'long': null
    }
  }

  $scope.signupFormSubmit = function() {
    $scope.userObj.user.userName = $scope.userObj.user.userName.toLowerCase();
    console.log($scope.userObj);
    SignupService.signup($scope.userObj)
    .then(function(success){

      $state.go('tabs.list')
      localStorage.setItem('id', success.data.id);
      localStorage.setItem('name', success.data.userName)
      localStorage.setItem('password', success.data.password_digest)
    })

    .catch(function(err){
      $log.error('there was an error in the catch',err);
      $state.go('login')
    })
  }



})
