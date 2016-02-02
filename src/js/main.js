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
      .when('/event-detail/:id', {
        templateUrl: 'partials/event_detail.html',
        controller: 'detailCtrl'
      })
  })//END angular.module 'flock'
    .controller('MainController', function($http, $scope){
      $http.get('api/event.json')
        .then(function(response){
          $scope.events = response.data;
        })//END get event.json
    })//END MainController


})();//END IIFE
