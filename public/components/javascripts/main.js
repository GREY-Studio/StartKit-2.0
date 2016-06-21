
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
