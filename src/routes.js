(function () {
  'use strict';

  angular.module('Registration')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('registration', {
      url: '/',
      templateUrl: 'src/registration/welcome.html'
    })

    .state('personal_info', {
      url: '/personal_info',
      templateUrl: 'src/registration/personal_info.html',
      controller: 'PersonalInfoController as personalInfo'
    })

    .state('health_history', {
      url: '/health_history',
      templateUrl: 'src/registration/health_history.html',
      controller: 'HealthHistoryController as healthHistory'
    })

    .state('health_historyII', {
      url: '/health_historyII',
      templateUrl: 'src/registration/health_historyII.html',
      controller: 'HealthHistoryControllerII as healthHistory'
    })
  }

})();
