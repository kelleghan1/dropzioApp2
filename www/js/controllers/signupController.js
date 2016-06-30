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
    console.log($scope.userObj);
    SignupService.signUp($scope.userObj)
    .then(function(success){
      $log.info(success);
      // localStorage.setItem('Token', success.data.token);
      // localStorage.setItem('currentUser', success.data.username)
      // localStorage.setItem('currentId', success.data.id)
      $state.go('tabs.list')
    })

    .catch(function(err){
      $log.error('there was an error in the catch',err);
      $state.go('login')
    })
  }



})
