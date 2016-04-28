export default () => {
  require('./home.scss');
  return {
    url: '/',
    template: require('./home.html'),
    controller: homeController
  }
}

const homeController = (['$scope', '$http', '$interval', '$q', '$timeout',
  ($scope, $http, $interval, $q, $timeout) => {

    function makeAPICall() {
      $http.get('https://shapeshiftnode.herokuapp.com/api/v1/get-coins').then(function(response) {
        $scope.exchanges = response.data;
      });
    }

    makeAPICall();

    $interval(function() {
      makeAPICall()
    }, 5000);

    $scope.changeOccurring = false;

    $scope.$watch("exchanges", function(newValue, oldValue) {
      console.log(newValue, oldValue);

      if (oldValue && newValue !== oldValue) {
        $scope.changeOccurring = true;
        $timeout(function() {

          $scope.changeOccurring = false;
        }, 500);
        console.log('Change happened');
      }
    });
  }
]);
