;(function(){
  var BASE_URL = "api/event.json";

  angular.module('flockTogether')

  .controller('detailCtrl', function($scope, $http, $location) {
    var id = $location.path().split('/')[2]-1;//pulls event_id out of path and translates to index number
    $http.get(BASE_URL)
    .then(function(response){
      $scope.thisEvent = response.data[id];
      $scope.directions = $scope.thisEvent.location.split(" ").join("+");
    });//END get event.json

    $scope.joinEvent=function(){
      console.log("Add code to put user to attending list");
      $http.get("https://flockapi.herokuapp.com/")
      .then(function successCallback(response) {
        console.log("Success");
      },
      function errorCallback(response) {
        console.log(response.data);
      })
    }//END joinEvent
  })//END eventDetail controller
})();
