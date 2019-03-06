var app = angular.module('httpProviderApp',
	[
		"ngRoute",
		"ngMaterial"
	]);

app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		controller: "MainController",
		templateUrl: "views/login.html"
	})
})