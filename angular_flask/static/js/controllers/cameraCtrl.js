'use strict';

angular.module('myApp.camera', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'static/partials/home.html',
    controller: 'HomeCtrl'
  });
}])


.controller('CameraController', ['$scope', '$http', function($scope, $http){ // creates a controller

    $scope.tiltUp = function(){

        $http.get('/tiltUp').success(function(response) {
            if(response){
                console.log(response);
            }else{
                console.log("fail up");
            }

        });

    };

    $scope.tiltDown = function(){

        $http.get('/tiltDown').success(function(response) {
            if(response){
                console.log(response);
            }else{
                console.log("fail down");
            }

        });
    };

    $scope.tiltLeft = function(){

        $http.get('/tiltLeft').success(function(response) {
            if(response){
                console.log(response);
            }else{
                console.log("fail left");
            }

        });
    };

    $scope.tiltRight = function(){

        $http.get('/tiltRight').success(function(response) {
            if(response){
                console.log(response);
            }else{
                console.log("fail right");
            }

        });
    };



    // $sign is the glue between app-controller and view
}]);
