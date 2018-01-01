var app = angular.module('app', ['ui.router'])
.config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
});
