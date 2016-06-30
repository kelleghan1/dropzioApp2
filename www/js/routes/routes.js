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





    .state('tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl: 'templates/tabs.html',
      controller: 'TabsController',

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

    .state('tabs.compass', {
      url: '/compass',
      views: {
        'tab-compass': {
          templateUrl: 'templates/tabs-compass.html',
          controller: 'CompassController'
        }
      }
    })

    .state('tabs.makeDrop', {
      url: '/makeDrop',
      views: {
        'tab-makeDrop': {
          templateUrl: 'templates/tabs-makeDrop.html',
          controller: 'MakeDropController'
        }
      }
    })




  })



}());
