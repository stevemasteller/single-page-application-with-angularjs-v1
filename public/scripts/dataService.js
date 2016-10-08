(function() {
'use strict';

angular.module('app').service('dataService', function($http) {
	  
	/** get all recipes */
	this.getRecipes = function(successCallback, errorCallback) {
		$http.get('/api/recipes')
		.then(successCallback, errorCallback)
	};
	
	/** get all categories in a particular category */
	this.getRecipesByCategory = function(selectedCategory, successCallback, errorCallback) {
		$http.get('/api/recipes?category=' + selectedCategory.name)
		.then(successCallback, errorCallback)
	};
	
	/** get a particular recipe */
	this.getRecipeById = function(id, successCallback, errorCallback) {
		$http.get('/api/recipes/' + id)
		.then(successCallback, errorCallback)
	};
	
	/** change a recipe */
	this.putRecipe = function(id, recipe, successCallback, errorCallback) {
		$http.put('/api/recipes/' + id, recipe)
		.then(successCallback, errorCallback)
	};

	/** create a recipe */
	this.postRecipe = function(recipe, successCallback, errorCallback) {
		$http.post('/api/recipes/', recipe)
		.then(successCallback, errorCallback)
	};

	/** delete a particular recipe */
	this.deleteRecipeById = function(id, successCallback, errorCallback) {
		$http.delete('/api/recipes/' + id)
		.then(successCallback, errorCallback)
	};
		  
	/** get all categories */
	this.getCategories = function(successCallback, errorCallback) {
		$http.get('/api/categories')
		.then(successCallback, errorCallback)
	};
	
	/** get all ingredients */
	this.getFoodItems = function(successCallback, errorCallback) {
		$http.get('/api/fooditems')
		.then(successCallback, errorCallback)
	};
	
});
})();
