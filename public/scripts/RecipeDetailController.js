(function() {
'use strict';

angular.module('app').controller('RecipeDetailController', function($scope, dataService, $location, $routeParams) {
	  
	var url = $location.$$url;
	if (url !== '/add') {
	
		dataService.getRecipeById($routeParams.id, function (response) {
			$scope.recipe = response.data;
		});
	} else {
		
		var newRecipe = {
			name: ' ',
			description: ' ',
			category: 'Other',
			prepTime: 0,
			cookTime: 0,
			ingredients: [{foodItem: ' ', condition: ' ', amount: ' '}],
			steps: [{description: ' '}]
		}
		
		dataService.postRecipe(newRecipe, function (response) {
			$scope.recipe = response.data;
		});
	}
	
	dataService.getCategories(function (response) {
		$scope.categories = response.data;
	});
	
	dataService.getFoodItems(function (response) {
		$scope.foodItems = response.data;
	});
	
	$scope.addIngredient = function() {
		$scope.recipe.ingredients.push({ foodItem: "", condition: "", amount: ""})
	};
	
	$scope.putRecipe = function() {
		dataService.putRecipe($scope.recipe._id, $scope.recipe, function(response) {
			$scope.recipe = response.data;
		}, function(errorCallback) {
			$scope.errors = [];
			for (var error in errorCallback.data.errors) {
				$scope.errors.push(errorCallback.data.errors[error][0].userMessage)
			}
		});
	};
	
	
	
	
});
})();
