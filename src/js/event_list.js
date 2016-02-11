;(function(){
  var BASE_URL = "api/event.json";

  angular.module('flockTogether')

    .controller('eventListCtrl', function($scope, $http) {
      $http.get(BASE_URL)
      .then(function(response){
        $scope.events = response.data;
      })//END get event.json
    })//END homeCtrl
})();
