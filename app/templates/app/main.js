require.config({
  paths: {
    'jquery': '../components/jquery/jquery',
    'bootstrap': '../components/bootstrap/js/bootstrap',
    'angular-route': '../components/angular-route/angular-route',
    'angular-resource': '../components/angular-resource/angular-resource',
    'angular-cookies': '../components/angular-cookies/angular-cookies',
    'angular': '../components/angular/angular',
  },
  shim: {
    'bootstrap': {
      deps: [
        'jquery'
      ]
    }
    'angular': {
      exports: 'angular'
    },
    'angular-route': [
      'angular'
    ],
    'angular-cookies': [
      'angular'
    ],
    'angular-resource': [
      'angular'
    ]
  },
  priority: [
    'angular'
  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app'
], function(angular, app) {
  'use strict';
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});