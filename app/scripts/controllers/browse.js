'use strict'

angular.module('recipesApp')
	.controller('BrowseCtrl', function ($scope, $http) {
		$http.get('/api/recipe').success(function(recipes) {
      $scope.recipes = recipes;
    });
	});