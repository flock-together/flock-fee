;(function(){
  angular.module('flockTogether')

    .controller('loginCtrl', function($scope, $http){
      var BASE_URL = "https://sheltered-reef-84965.herokuapp.com/";
    // var delay=1000;
    //   setTimeout(function(){
    //       $("h1").addClass("current");
    //   }, delay);
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

      $scope.participants = {
        "username": "",
        "password": "",
        "email": "",
        "first_name": "",
        "last_name": ""
      };

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://sheltered-reef-84965.herokuapp.com/users/",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "authorization": "Basic Z2xlbm46c3VtaXN1bWk=",
          "cache-control": "no-cache",
          "postman-token": "9bb185c0-3dbe-093d-ec05-937e23771e1a"
        }
      }
      $scope.participantSignup = function() {
        console.log($scope.participants);
        console.log(settings);
        console.log("Hello");
        $http(settings, $scope.participants)
          .success(function(response) {
            console.log($scope.username);
            $scope.participants = {
              "username": "",
              "password": "",
              "email": "",
              "first_name": "",
              "last_name": ""
            };
          })
          .error(function(response) {
            console.log("Fail!" + response);
          });
      }//participantSignup form


$("a[href].login-form").on('click', function() {
  $("section.signup-form-participant").removeClass("active");
  $("section.signup-form-admin").removeClass("active");
  $("section.login-form").addClass("active");
})
$("a[href].signup-form-participant").on('click', function() {
  $("section.login-form").removeClass("active");
  $("section.signup-form-admin").removeClass("active");
  $("section.signup-form-participant").addClass("active");
})
$("a[href].signup-form-admin").on('click', function() {
  $("section.signup-form-participant").removeClass("active");
  $("section.login-form").removeClass("active");
  $("section.signup-form-admin").addClass("active");
})

    })//END loginCtrl
})();//END IIFE
