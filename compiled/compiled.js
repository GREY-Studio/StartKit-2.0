
//------------------------------------//
// Controller References
//------------------------------------//

define(function() {

  return [
    'core/controllers/homeController'
  ]

});


//------------------------------------//
// Home Controller
//------------------------------------//

define(function() {

  angular
    .module('coreModule')
    .controller('homeController', ['$scope', function($scope) {
      $scope.title = "Home";
    }]);

});


//------------------------------------//
// Home Controller
//------------------------------------//

define(function() {

  var coreModule = angular.module('coreModule');

  coreModule.controller('mainController', ['$scope', function($scope) {
    
  }]);

});


//------------------------------------//
// Core Module
//------------------------------------//

define(['core/runners/logRunner'], function(logRunner) {

  var coreModule = angular.module('coreModule', ['ngRoute', 'themeModule']);

  coreModule.run(logRunner);

  // Angular routing
  coreModule.config(['$routeProvider', function($routeProvider){

    $routeProvider
      .when('/', { controller: 'homeController', templateUrl: 'core/views/home.html' })
      .when('/home', { controller: 'homeController', templateUrl: 'core/views/home.html' });
    
  }]);

  require(['core/controllerReferences'], function(references) {
      require(references, function() {
        angular.bootstrap(document, ['coreModule']);
      });
  });

});


//------------------------------------//
// Log Runner
//------------------------------------//

define(function() {

  return ['$log', function($log) {
    $log.info('Started coreModule...');
  }];

});


//------------------------------------//
// Require Config
//------------------------------------//

// Require.js paths and dependencies
require.config({

  paths: {

    'angular': '/static/angular/angular',
    'jquery': '/static/jquery/dist/jquery',
    'angular-route': '/static/angular-route/angular-route',

    // Load the modules
    'coreModule': '/components/javascripts/core/coreModule',
    'themeModule': '/components/javascripts/theme/themeModule'

  },

  shim: {

    'angular': {
      'deps': [ 'jquery' ]
    },

    'angular-route': {
      'deps': [ 'angular' ]
    },

    'themeModule': {
      'deps': [ 'angular-route' ]
    },

    'coreModule': {
      'deps': [ 'angular-route', 'themeModule' ]
    }

  }

});

require(['coreModule'], function() {

  // Application ready!

});


//------------------------------------//
// Theme Module
//------------------------------------//

define(function() {

  var themeModule = angular.module('themeModule', []);

  themeModule.run(['$log', function($log) {
    $log.info('Initialized the themeModule');
  }]);

});
