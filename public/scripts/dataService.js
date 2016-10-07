(function() {
'use strict';

angular.module('app').service('dataService', function($http) {
	  
	this.getRecipes = function(successCallback, errorCallback) {
		$http.get('/api/recipes')
		.then(successCallback, errorCallback)
	};
	
	this.getRecipesByCategory = function(selectedCategory, successCallback, errorCallback) {
		$http.get('/api/recipes?category=' + selectedCategory.name)
		.then(successCallback, errorCallback)
	};
	
	this.getRecipeById = function(id, successCallback, errorCallback) {
		$http.get('/api/recipes/' + id)
		.then(successCallback, errorCallback)
	};
	
	this.putRecipe = function(id, recipe, successCallback, errorCallback) {
		$http.put('/api/recipes/' + id, recipe)
		.then(successCallback, errorCallback)
	};

	this.postRecipe = function(recipe, successCallback, errorCallback) {
		$http.post('/api/recipes/', recipe)
		.then(successCallback, errorCallback)
	};

	this.deleteRecipeById = function(id, successCallback, errorCallback) {
		$http.delete('/api/recipes/' + id)
		.then(successCallback, errorCallback)
	};
		  
	this.getCategories = function(successCallback, errorCallback) {
		$http.get('/api/categories')
		.then(successCallback, errorCallback)
	};
	
	this.getFoodItems = function(successCallback, errorCallback) {
		$http.get('/api/fooditems')
		.then(successCallback, errorCallback)
	};
	
});
})();
