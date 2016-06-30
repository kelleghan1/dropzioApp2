(function() {

  angular.module('dropzio')

  .controller('TabsController', function($scope){
    // $scope.sound = ngAudio.load('http://www.archive.org/download/SwissYodelCall/Track17_64kb.mp3');
    // play('http://www.archive.org/download/SwissYodelCall/Track17_64kb.mp3')
    //
    // $scope.playSound = function() {
    //   return ngAudio.play($scope.sound)
    // }
    // ngAudio.play('http://www.archive.org/download/SwissYodelCall/Track17_64kb.mp3')
    $scope.doItLive = function (){
      TabService.go()
      .then(function(success){
        // $log.info('button clickeD!');
        $state.go('tabs.list')
      })
      .catch(function(error){
        $state.go('tabs.list')
      })
    }

  })

}());
