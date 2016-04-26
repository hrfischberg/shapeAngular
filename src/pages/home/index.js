export default () => {
  require('./home.scss');
  return {
    url: '/',
    template: require('./home.html'),
    controller: homeController
  }
}

const homeController = (['$scope', '$http', '$interval', '$q',
  ($scope, $http, $interval, $q) => {

    function makeAPICall() {
      $http.get('https://shapeshiftnode.herokuapp.com/api/v1/get-coins').then(function(response) {
        $scope.exchanges = response.data;
      });
    }

    makeAPICall();

    $interval(function() {
      makeAPICall()
    }, 5000);

    $scope.$watch("exchanges", function(newValue, oldValue) {
      if (oldValue && newValue !== oldValue) {
        console.log('Change happened');
      }
    });
  }
]);
