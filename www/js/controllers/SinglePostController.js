angular.module('dropzio')
.controller('SinglePostController', function(
  $state,
  $log,
  SignupService,
  $scope,
  $stateParams,
  ListService,
  $firebaseArray
){

  $stateParams.postId;
  $scope.postList;
  $scope.currentPost;
  $scope.currentImage;

  ListService.getPosts()
  .then(function(result){
    $scope.postList = result;
    $scope.currentPost =
    $scope.postList.filter(function(obj){
      if (obj.id == $stateParams.postId){
        return true
      }
    })
  })


  var imagesRef = new Firebase("https://imageuploadangularfirebase.firebaseio.com/images");
  $scope.images = $firebaseArray(imagesRef);

  // setTimeout(function(){
  //   for (var key in $scope.images){
  //     console.log('key',$scope.images[key]);
  //     console.log($scope.currentPost[0]);
  //     if ($scope.images[key].$id===$scope.currentPost[0].imgURL) {
  //       // $scope.currentImage=$scope.images[key].image
  //       console.log(1);
  //     }
  //   }
  // }, 3000)

})
