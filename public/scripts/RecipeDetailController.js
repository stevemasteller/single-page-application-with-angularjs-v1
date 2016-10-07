(function() {
'use strict';

angular.module('app').controller('RecipeDetailController', function($scope, dataService, $location, $routeParams) {
	
	$scope.errors = [];
	
	$scope.recipe = {};
	$scope.recipe.ingredients = [];
	$scope.recipe.steps = [];

	$scope.edit = false;
	if ($location.$$path !== '/add') {
		
		$scope.edit = true;
		dataService.getRecipeById($routeParams.id, function (response) {
			$scope.recipe = response.data;
		});
	} 
	
	dataService.getCategories(function (response) {
		$scope.categories = response.data;
	});
	
	dataService.getFoodItems(function (response) {
		$scope.foodItems = response.data;
	});
	
	$scope.cancel = function() {
		$location.url('/#')
	};
		
	$scope.addIngredient = function() {
		$scope.recipe.ingredients.push({ foodItem: "", condition: "", amount: ""})
	};
	
	$scope.deleteIngredient = function(index) {
		$scope.recipe.ingredients.splice(index, 1);
	};
  
	$scope.addStep = function() {
		$scope.recipe.steps.push({description: ""});
	};

	$scope.deleteStep = function(index) {
		$scope.recipe.steps.splice(index, 1);
	};
  
	$scope.saveRecipe = function() {
		
		if ($location.$$path !== '/add') {
			
			dataService.putRecipe($scope.recipe._id, $scope.recipe, function(response) {
				$location.path('/');
				
			}, function(errorCallback) {
				$scope.errors = [];
				for (var error in errorCallback.data.errors) {
					$scope.errors.push(errorCallback.data.errors[error][0].userMessage)
				}
			});
			
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
