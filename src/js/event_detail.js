;(function(){
  var BASE_URL = "https://sheltered-reef-84965.herokuapp.com/events/";

  angular.module('flockTogether')

  .controller('detailCtrl', function($scope, $http, $location) {
    var id = $location.path().split('/')[2]-1;//pulls event_id out of path and translates to index number
    $http.get("api/event.json")
    .then(function(response){
      $scope.event = response.data[id];
      $scope.directions = $scope.event.location.split(" ").join("+");
    });//END get event.json

    $scope.joinEvent = function(){
      console.log("Add code to put user to attending list");
      $http.get("https://flockapi.herokuapp.com/")
      .then(function successCallback(response) {
        console.log("Success");
      },
      function errorCallback(response) {
        console.log(response.data);
      })
    };//END joinEvent

  })//END eventDetail controller
})();
