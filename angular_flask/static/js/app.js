
'use strict';


angular.module('myApp', [
'angularFlaskServices',
'myApp.camera'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
		$routeProvider

		.when('/', {
			templateUrl: 'static/partials/home.html',
			controller: "CameraController"
		})

		.otherwise({
			redirectTo: '/'
		})
		;

		$locationProvider.html5Mode(true);
	}])
;
