(function() {
'use strict';

angular.module('app').controller('RecipesController', function($scope, dataService, $location) {
	  
	/** Get all recipes when page is loaded */
	dataService.getRecipes(function (response) {
		$scope.recipes = response.data;
	});
	
	
	/** get all recipes in a particular category */
	$scope.getRecipesByCategory = function () {
		
		if ($scope.selectedCategory) {
			
			dataService.getRecipesByCategory($scope.selectedCategory, function (response) {
				$scope.recipes = response.data;
			});
		} else {
		
			/** get all recipes if no category is selected in drop down category menu */
			dataService.getRecipes(function (response) {
				$scope.recipes = response.data;
			});
		}
	};
	
	/** delete a particular recipe */
	$scope.deleteRecipeById = function(id) {
		
		dataService.deleteRecipeById(id, function(response, error) {
			console.log(error);
			
			/** redisplay the remaining recipes */
			dataService.getRecipes(function(response) {
				$scope.recipes = response.data; 
			});
		}, function(errorCallback) {
			console.log(errorCallback);
		});
	};
  
	/** get all categories to populate the category dropdown menu */
	dataService.getCategories(function (response) {
		$scope.categories = response.data;
	});
	
	/** go to the add new recipe screen */
	$scope.addRecipe = function() {
		$location.path('/add/');
	};
	
});
})();
