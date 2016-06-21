
//------------------------------------//
// Core Module
//------------------------------------//

define(function() {

  var coreModule = angular.module('coreModule', ['themeModule']);

  coreModule.controller('homeController', ['$scope', function($scope) {
    $scope.title = "Hello World!";
  }]);

  coreModule.run(['$log', function($log) {
    $log.info('Initialized the coreModule');
  }]);

  setTimeout(function () {
    angular.bootstrap(document, ['coreModule']);
  }, 0);

});


//------------------------------------//
// Require Config
//------------------------------------//

// Require.js paths and dependencies
require.config({

  paths: {

    'angular': '/static/angular/angular',
    'jquery': '/static/jquery/dist/jquery',

    // Load the modules
    'coreModule': '/components/javascripts/core/coreModule',
    'themeModule': '/components/javascripts/theme/themeModule'

  },

  shim: {

    'angular': {
      'deps': [ 'jquery' ]
    },

    'themeModule': {
      'deps': [ 'angular' ]
    },

    'coreModule': {
      'deps': [ 'angular', 'themeModule' ]
    }

  }

});

require(['coreModule'], function() {

  // Application ready!

});

