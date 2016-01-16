;(function(){
  angular.module('flockTogether')

    .controller('createEventCtrl', function($scope, $http){
      $scope.event = { };
      $scope.createEvent = function() {
        $http.post('https://SITE-NAME-API.herokuapp.com/api/admin/', $scope.event)
          .success(function(response) {
            console.log($scope.response.data);
            $scope.event = { };
          })
          .error(function (response) {
            console.log("fail" + response);
          });
      }
    })//END createNewEventCtrl


})();
