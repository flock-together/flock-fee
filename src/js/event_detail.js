;(function(){

  angular.module('flockTogether')

    .controller('detailCtrl', function($scope, $http, $location) {
      var id = $location.path().split('/')[2]-1;//pulls event_id out of path for reference
      $http.get("api/event.json")
      .then(function(response){
        $scope.thisEvent = response.data[id];
        $scope.directions = $scope.thisEvent.location.split(" ").join("+");
      })//END get event.json

      $scope.joinEvent=function(){
        console.log("Add code to put user to attending list"); 
      }
    })//END eventDetail controller
})();
