
//------------------------------------//
// Require Config
//------------------------------------//

// Require.js paths and dependencies
require.config({

  paths: {

    // Paths to https CDN content - with static fallback in Bower
    'angular': ['https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min', '/static/angular/angular'],
    'jquery': ['https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min', '/static/jquery/dist/jquery'],
    'angular-route': ['https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-route', '/static/angular-route/angular-route'],

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

// Require coreModule
require(['coreModule'], function() {
  // Application ready!
});
