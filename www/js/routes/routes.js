(function() {
  'use strict';
  angular.module('dropzio')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login')

    $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController'
    })

    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'SignupController'
    })

    .state('tabs.compass', {
      url: '/compass',
      views: {
        'tab-compass': {
          templateUrl: 'templates/tabs-compass.html',
          controller: 'CompassController'
        }
      }
    })

    .state('tabs.list', {
      url: '/list',
      views: {
        'tab-list': {
          templateUrl: 'templates/tabs-list.html',
          controller: 'ListController'
        }
      },

    })

    .state('tabs.makedrop', {
      url: '/makedrop',
      views: {
        'tab-makedrop': {
          templateUrl: 'templates/tabs-makeDrop.html',
          controller: 'MakeDropController'
        }
      }
    })

    .state('tabs.singlepost', {
      url: '/:postId',
      views: {
        'tab-singlepost': {
          templateUrl: 'templates/tabs-singlepost.html',
          controller: 'SinglePostController'
        }
      }
    })

    .state('tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl: 'templates/tabs.html',
      controller: 'TabsController'
    })


  })



}());
