;(function(){

  angular.module('flockTogether', ['ngRoute', 'ngAnimate'], function($routeProvider) {
      $routeProvider
      // .when('/', {
      //   templateUrl: 'partials/event_list.html',
      //   controller: 'eventListCtrl'
      // })//END .when '/home'
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
  $(document).ready(function() {
    $(".wrapper").addClass("openerror");
    $(".welcome-  modal").removeClass("inactive");
    setTimeout(function() {
      $(".wrapper").removeClass("openerror");
      $(".welcome-modal").addClass("inactive");
    }, 15000);
  });

  $(".confirm").on("click", function(){
    $(".wrapper").removeClass("openerror");
    $(".welcome-modal").addClass("inactive");
  });

      $http.get('api/event.json')
        .then(function(response){
          $scope.events = response.data;
        })//END get event.json
    })//END MainController


})();//END IIFE
