var app = angular.module("movieSearchApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../templates/home.html'
    })
    .when('/show', {
      templateUrl: '../templates/show.html'
    })
  $locationProvider.html5Mode(true);
})