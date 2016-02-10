;(function(){
  var BASE_URL = "api/event.json";

  angular.module('flockTogether')

    .controller('eventListCtrl', function($scope, $http) {
      var delay=1000;
      setTimeout(function(){
          $("h1, .event-overview, a[href]").addClass("current");
      }, delay);
      $http.get(BASE_URL)
      .then(function(response){
        $scope.events = response.data;
      })//END get event.json
    })//END homeCtrl
})();
