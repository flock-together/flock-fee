;(function(){
  angular.module('flockTogether', ['ngRoute'], function($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html'
      })//END .when '/'

  })//END angular.module 'flock'
    .controller('MainController', function(){

    });//END MainController
})();//END IIFE
