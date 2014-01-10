'use strict';

angular.module('recipesApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Browse',
      'link': '#/browse'
    }];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
