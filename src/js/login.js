;(function(){
  angular.module('flockTogether')
      .factory('facebookService', function($q) {
          return {
              getMyLastName: function() {
                  var deferred = $q.defer();
                  FB.api('/me', {
                      fields: 'last_name'
                  }, function(response) {
                      if (!response || response.error) {
                          deferred.reject('Error occured');
                      } else {
                          deferred.resolve(response);
                      }
                  });
                  return deferred.promise;
              }
          }
      })
    .controller('loginCtrl', function($scope, $http){

      // (function(d, s, id) {
      //   var js, fjs = d.getElementsByTagName(s)[0];
      //   if (d.getElementById(id))  return;
      //   js = d.createElement(s); js.id = id;
      //   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=531876423645126";
      //   fjs.parentNode.insertBefore(js, fjs);
      // }(document, 'script', 'facebook-jssdk'))//END Facebook login

      $scope.admin = { };
      $scope.adminSignup = function() {
        $http.post('https://brew-keeper-api.herokuapp.com/api/admin/', $scope.admin)
          .success(function(response) {
            console.log($scope.response.data);
            $scope.admin = { };
          })
          .error(function (response) {
            console.log(respons);
          });
      }//adminSignup form

      $scope.participants = { };
      $scope.participantSignup = function() {
        $http.post('https://brew-keeper-api.herokuapp.com/api/participant/', $scope.participants)
          .success(function(response) {
            console.log($scope.name_first);
          })
          .error(function(response) {
            console.log("Fail!");
          });
      }//participantSignup form

      // $scope.getMyLastName = function() {
      //   facebookService.getMyLastName()
      //   .success(function(response) {
      //     console.log("hi");
      //     $scope.last_name = response.last_name;
      //   })
      //   .failure(function(response) {
      //     console.log("You");
      //   })
      // };//END factory
    })//END loginCtrl


})();//END IIFE
