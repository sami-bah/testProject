'use strict';

/**
 * @ngdoc function
 * @name testProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testProjectApp
 */
angular.module('testProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
