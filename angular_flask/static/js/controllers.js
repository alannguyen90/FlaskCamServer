'use strict';

/* Controllers */


function IndexController($scope) {
	
}

function CameraController($scope) {

    $scope.tiltUp = function(){

        $http.get('/tiltUp' + id).success(function(response) {
            if(response){
                console.log(response);
            }else{
                console.log("fail up");
            }

        });

    };

    $scope.tiltDown = function(){

        $http.get('/tiltDown' + id).success(function(response) {
            if(response){
                console.log(response);
            }else{
                console.log("fail down");
            }

        });
    };

    $scope.tiltLeft = function(){

        $http.get('/tiltLeft' + id).success(function(response) {
            if(response){
                console.log(response);
            }else{
                console.log("fail left");
            }

        });
    };

    $scope.tiltRight = function(){

        $http.get('/tiltRight' + id).success(function(response) {
            if(response){
                console.log(response);
            }else{
                console.log("fail right");
            }

        });
    };

}

