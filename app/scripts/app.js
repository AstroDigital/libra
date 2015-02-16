'use strict';

// hide $digest error
console.error = function(){};
/**
 * @ngdoc overview
 * @name dauriaSearchApp
 * @description
 * # dauriaSearchApp
 *
 * Main module of the application.
 */
angular
  .module('dauriaSearchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'leaflet-directive',
    'ui.bootstrap'
  ]);
