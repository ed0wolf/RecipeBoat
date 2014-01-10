'use strict';

describe('Controller: BrowseCtrl', function () {

  // load the controller's module
  beforeEach(module('recipesApp'));

  var BrowseCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/recipe')
      .respond([{name: 'Sardines in Brine', id: 1}, {name: 'Tuna Delight', id: 2}, 
      			{name: 'Rice and Pease with Plantain', id: 3}, {name:'Apple Crumble', id:3}]);
    scope = $rootScope.$new();
    BrowseCtrl = $controller('BrowseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of recipes to the scope', function () {
    expect(scope.recipes).toBeUndefined();
    $httpBackend.flush();
    expect(scope.recipes.length).toBe(4);
  });
});
