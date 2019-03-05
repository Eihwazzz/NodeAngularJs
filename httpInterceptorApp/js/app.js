var app = angular.module('httpProviderApp',
	[
		"ngRoute"
	]);

app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		controller: "MainController",
		templateUrl: "views/login.html"
	})
})