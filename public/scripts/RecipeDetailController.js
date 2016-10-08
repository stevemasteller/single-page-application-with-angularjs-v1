(function() {
'use strict';

angular.module('app').controller('RecipeDetailController', function($scope, dataService, $location, $routeParams) {
	
	/** initialize errors array */
	$scope.errors = [];
	
	/** initialize an empty recipe for the adding a new recipe - postRecipe */
	$scope.recipe = {};
	$scope.recipe.ingredients = [];
	$scope.recipe.steps = [];

	/** determine if editing or adding a recipe. If editing get the particular recipe */
	$scope.edit = false;
	if ($location.$$path !== '/add') {
		
		$scope.edit = true;
		dataService.getRecipeById($routeParams.id, function (response) {
			$scope.recipe = response.data;
		});
	} 
	
	/** get all categories to populate the category dropdown menu */
	dataService.getCategories(function (response) {
		$scope.categories = response.data;
	});
	
	/** get all ingredients to populate the ingredients dropdown menu */
	dataService.getFoodItems(function (response) {
		$scope.foodItems = response.data;
	});
	
	/** cancel editing/adding return to the recipes.html screen */
	$scope.cancel = function() {
		$location.url('/#')
	};
		
	/** add a new ingredient to the list */
	$scope.addIngredient = function() {
		$scope.recipe.ingredients.push({ foodItem: "", condition: "", amount: ""})
	};
	
	/** delete the selected ingredient from the list */
	$scope.deleteIngredient = function(index) {
		$scope.recipe.ingredients.splice(index, 1);
	};
  
	/** add a new recipe step to the list */
	$scope.addStep = function() {
		$scope.recipe.steps.push({description: ""});
	};

	/** delete a recipe step from the list */
	$scope.deleteStep = function(index) {
		$scope.recipe.steps.splice(index, 1);
	};
  
	/** save an edited or new recipe */
	$scope.saveRecipe = function() {
		
		/** save an edited recipe, return to the recipes.html screen */
		if ($location.$$path !== '/add') {
			
			dataService.putRecipe($scope.recipe._id, $scope.recipe, function(response) {
				$location.path('/');
				
			}, function(errorCallback) {
				$scope.errors = [];
				for (var error in errorCallback.data.errors) {
					$scope.errors.push(errorCallback.data.errors[error][0].userMessage)
				}
			});
			
		/** save a new recipe, return to the recipes.html screen */
		} else {
			dataService.postRecipe($scope.recipe, function (response) {
				$location.path('/');
				
			}, function(errorCallback) {
				$scope.errors = [];
				for (var error in errorCallback.data.errors) {
					$scope.errors.push(errorCallback.data.errors[error][0].userMessage)
				}
			});
		}
	};
	
	
	
	
});
})();
