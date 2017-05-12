'use strict';

module.exports = function(karma) {
  karma.set({

    frameworks: [ 'jasmine', 'browserify' ],

    files: [
      'vendor/external.js',
      'test/**/*Spec.js'
    ],

    reporters: [ 'dots' ],

    preprocessors: {
      'test/**/*Spec.js': [ 'browserify' ]
    },

    browsers: [ 
      // 'Chrome',
      'Firefox'
    ],

    logLevel: 'LOG_DEBUG',

    singleRun: false,
    autoWatch: true,
    // singleRun: true,
    // autoWatch: false,

    // browserify configuration
    browserify: {
      debug: true,
      transform: [ 'brfs', 'browserify-shim' ]
    }
  });
};
