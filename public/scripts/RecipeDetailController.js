(function() {
'use strict';

angular.module('app').controller('RecipeDetailController', function($scope, dataService, $routeParams) {
	  
	dataService.getRecipeById($routeParams.id, function (response) {
		console.log(response.data);
		$scope.recipe = response.data;
	});
	
	dataService.getCategories(function (response) {
		$scope.categories = response.data;
	});
	
	dataService.getFoodItems(function (response) {
		$scope.foodItems = response.data;
	});
	
});
})();
