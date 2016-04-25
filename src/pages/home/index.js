export default () => {
  require('./home.scss');
  return {
    url: '/',
    template: require('./home.html'),
    controller: homeController
  }
}

const homeController = (['$scope', '$http', '$interval', '$q', ($scope, $http, $interval, $q) => {
  $interval(function (){
    console.log('Update');
    $http.get('http://localhost:3001/api/v1/get-coins').then(function(response) {
      $scope.exchanges = response.data;
    });
  }, 2000);
}]);
