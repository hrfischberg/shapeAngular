import angular from 'angular';
import 'angular-ui-router';


import configHome from './pages/home/';

angular.module('app', ['ui.router'])
  .config(
    ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',

      ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {

      $httpProvider.defaults.useXDomain = true;

      require('./style/main.scss')

      $stateProvider
        .state ('/', configHome() )

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    }

    ]
  ).run(function ($http){
    $http.defaults.headers.common = {'Accept' : 'application/json, text/plain, */*, gzip'}
  });
