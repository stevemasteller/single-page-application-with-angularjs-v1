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
	
	$scope.deleteRecipeById = function(Id) {
		
		dataService.deleteRecipeById(Id, function(response) {
			
			dataService.getRecipes(function(response) {
				$scope.recipes = response.data;
			});
		});
	};
  
	dataService.getCategories(function (response) {
		$scope.categories = response.data;
	});
	
	$scope.addRecipe = function() {
		$location.url('/add/');
	};
	
});
})();
