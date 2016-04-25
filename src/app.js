import angular from 'angular';
import 'angular-ui-router';


import configHome from './pages/home/';

angular.module('app', ['ui.router'])
  .config(
    ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',

      ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {


        require('./style/main.scss')

        $stateProvider
          .state('/', configHome())

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
      }

    ]
  );
