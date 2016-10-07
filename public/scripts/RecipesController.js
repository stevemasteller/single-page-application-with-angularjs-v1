(function() {
'use strict';

angular.module('app').controller('RecipesController', function($scope, dataService, $location) {
	  
	dataService.getRecipes(function (response) {
		$scope.recipes = response.data;
	});
	
	$scope.getRecipesByCategory = function () {
		
		if ($scope.selectedCategory) {
			
			dataService.getRecipesByCategory($scope.selectedCategory, function (response) {
				$scope.recipes = response.data;
			});
		} else {
		
			dataService.getRecipes(function (response) {
				$scope.recipes = response.data;
			});
		}
	};
	
	$scope.deleteRecipeById = function(id) {
		
		dataService.deleteRecipeById(id, function(response) {
			
			dataService.getRecipes(function(response) {
				$scope.recipes = response.data;
			});
		}, function(errorCallback) {
			console.log(errorCallback);
		});
	};
  
	dataService.getCategories(function (response) {
		$scope.categories = response.data;
	});
	
	$scope.addRecipe = function() {
		$location.path('/add/');
	};
	
});
})();
