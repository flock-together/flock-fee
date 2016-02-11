;(function(){
  angular.module('flockTogether')

    .controller('createEventCtrl', function($scope, $http){
    var delay=1000;
      setTimeout(function(){
          $("h1").addClass("current");
      }, delay);
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
