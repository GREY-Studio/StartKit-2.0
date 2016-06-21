
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
