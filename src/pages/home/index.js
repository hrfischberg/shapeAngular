export default () => {
  require('./home.scss');
  return {
    url: '/',
    template: require('./home.html'),
    controller: homeController()
  }
}

const homeController = () => (
  ['$scope', '$http', '$interval', '$q',
    ($scope, $http, $interval, $q) => {
      // $interval(function (){
        $http.get('http://localhost:3000/api/v1/get-coins').then(function(response) {
          $scope.exchanges = response.data;
        // }, 1000)
      });
    }
  ]
);