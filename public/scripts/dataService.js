(function() {
'use strict';

angular.module('app').service('dataService', function($http) {
	  
	this.getRecipes = function(callback) {
		$http.get('/api/recipes')
		.then(callback)
	};
	
	this.getRecipesByCategory = function(selectedCategory, callback) {
		$http.get('/api/recipes?category=' + selectedCategory.name)
		.then(callback)
	};
	
	this.getRecipeById = function(id, callback) {
		$http.get('/api/recipes/' + id)
		.then(callback)
	};
	
          // deletes a recipe by ID number
	this.deleteRecipeById = function(id, callbackSuccess, callbackFailure) {
            $http.delete('/api/recipes/' + id)
            .then(callbackSuccess, callbackFailure)
          };
		  
	this.getCategories = function(callback) {
		$http.get('/api/categories')
		.then(callback)
	};
	
	this.getFoodItems = function(callback) {
		$http.get('/api/fooditems')
		.then(callback)
	};
	
});
})();
