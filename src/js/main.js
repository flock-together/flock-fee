;(function(){
  angular.module('flockTogether', ['ngRoute'], function($routeProvider, $httpProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      })//END .when '/home'
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl'
      })//END .when '/login'
      .when('/create-event', {
        templateUrl: 'partials/create_event.html',
        controller: 'createEventCtrl'
      })
  })//END angular.module 'flock'
    .controller('MainController', function($http, $scope){

    })//END MainController


})();//END IIFE
