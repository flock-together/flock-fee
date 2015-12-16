;(function(){
  angular.module('flockTogether', ['ngRoute'], function($routeProvider, $httpProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'loginCtrl'
      })//END .when '/'

  })//END angular.module 'flock'
  .controller('MainController', function(){
    // window.fbAsyncInit = function() {
    //   FB.init({
    //     appId      : '531876423645126',
    //     xfbml      : true,
    //     version    : 'v2.5'
    //   });
    // };
  })//END MainController


})();//END IIFE
