;(function(){
  angular.module('flockTogether')

    .controller('loginCtrl', function($scope, $http){

      $scope.admin = { };
      $scope.adminSignup = function() {
        $http.post('https://SITE-NAME-API.herokuapp.com/api/admin/', $scope.admin)
          .success(function(response) {
            console.log($scope.response.data);
            $scope.admin = { };
          })
          .error(function (response) {
            console.log("fail" + response);
          });
      }//adminSignup form

      $scope.participants = { };
      $scope.participantSignup = function() {
        $http.post('https://SITE-NAME-API.herokuapp.com/api/participant/', $scope.participants)
          .success(function(response) {
            console.log($scope.name_first);
          })
          .error(function(response) {
            console.log("Fail!" + response);
          });
      }//participantSignup form

    })//END loginCtrl


})();//END IIFE
