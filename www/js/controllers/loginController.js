angular.module('dropzio')
.controller('LoginController', function(LoginService, $scope, $state, $log, $timeout){

  $scope.landing = 1;
  $scope.landing1 = 1;
  $scope.landing2 = 1;
  $scope.landing3 = 1;
  $scope.landing4 = 1;
  $scope.landing5 = 1;
  $scope.landing6 = 1;

  $scope.landingImage = function(){

    $timeout(function(){
      $scope.landing = 0;
    }, 1000)

  }()

  $scope.landingImage1 = function(){
    $timeout(function(){
      $scope.landing1 = 0;
    }, 1100)
  }()

  $scope.landingImage2 = function(){
    $timeout(function(){
      $scope.landing2 = 0;
    }, 1200)
  }()

  $scope.landingImage3 = function(){
    $timeout(function(){
      $scope.landing3 = 0;
    }, 1350)
  }()

  $scope.landingImage4 = function(){
    $timeout(function(){
      $scope.landing4 = 0;
    }, 1450)
  }()

  $scope.landingImage5 = function(){
    $timeout(function(){
      $scope.landing5 = 0;
    }, 1550)
  }()

  $scope.landingImage6 = function(){
    $timeout(function(){
      $scope.landing6 = 0;
    }, 1700)
  }()

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
      console.log('check', success);
      $state.go('tabs.list')
    })

    .catch(function(err){
      $state.go('login')
    })
  }


})
