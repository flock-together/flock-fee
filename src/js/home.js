;(function(){
  // var BASE_URL = "";

  angular.module('flockTogether')

    .controller('homeCtrl', function($scope, $http) {

    $scope.event = {};

    $http.get('api/event.json')
      .then(function(response){
        $scope.events = response.data;
      })//END get event.json

      $scope.showMore = function() {
        $('.show-more').click(function(){
          $('body').animate({scroll: $(this).offset().top});
          $(this).addClass('hidden');
          $(this.nextSibling).removeClass('hidden');
          $(this.parentElement.parentElement.nextSibling.nextSibling).removeClass('hidden');
          $(this.next).removeClass('hidden');

        });
      }//END showMore
      $scope.showLess = function() {
        $('i.event-details').click(function(){
          $(this).addClass('hidden');
          $(this.previousSibling).removeClass('hidden');
          $(this.parentElement.parentElement.nextSibling.nextSibling).addClass('hidden');
        });
      }//END showLess
    })//END homeCtrl
})();
