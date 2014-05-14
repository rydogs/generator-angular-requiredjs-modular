define([
        'angular',
        'angular-route',
        'angular-resource',
        'angular-cookies'
    ], function (angular) {
            'use strict';            
            var app = angular.module('app', [
                'ngResource',
                'ngRoute',
                'ngCookie'
            ]);            
            return app;
});