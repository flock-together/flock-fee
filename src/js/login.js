;(function(){
  angular.module('flockTogether')

    .controller('loginCtrl', function($scope, $http){
      var BASE_URL = "https://sheltered-reef-84965.herokuapp.com/users/";

      $scope.login = { };
      $scope.loginUser = function() {
        $http.post('BASE_URL', $scope.login)
          .success(function(response) {
            console.log($scope.response.data);
            $scope.login = { };
          })
          .error(function (response) {
            console.log("fail" + response);
          });
      }//loginUser form

      $scope.admin = { };
      $scope.adminSignup = function() {
        $http.post('BASE_URL', $scope.admin)
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
        $http.post('BASE_URL', $scope.participants)
          .success(function(response) {
            console.log($scope.name_first);
          })
          .error(function(response) {
            console.log("Fail!" + response);
          });
      }//participantSignup form

    })//END loginCtrl


})();//END IIFE
