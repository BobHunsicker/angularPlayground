'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {templateUrl: '../partials/projects.html', controller: 'projects'});
  $routeProvider.when('/about', {templateUrl: '../partials/about.html', controller: 'about'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);