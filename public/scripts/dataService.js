(function() {
'use strict';

angular.module('app').service('dataService', function($http) {
	  
	this.getRecipes = function(callback) {
		$http.get('/api/recipes')
		.then(callback)
	}
	
	this.getRecipesByCategory = function(selectedCategory, callback) {
		console.log(selectedCategory.name);
		$http.get('/api/recipes?category=' + selectedCategory.name)
		.then(callback)
	}
	
	this.getCategories = function(callback) {
		$http.get('/api/categories')
		.then(callback)
	}
	
});
})();
