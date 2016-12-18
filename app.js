// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "pages/home.html",
                controller: "homeCtrl"
            })
            .when("/forecast", {
                templateUrl : "pages/forecast.html",
                controller: "weatherCtrl"
        });
});

// CONTROLLERS
weatherApp.controller('homeCtrl', function($scope) {

    $scope.home = 'Uspelo prva';
    
});

weatherApp.controller('weatherCtrl', function($scope) {
    
    $scope.weather = 'Uspelo druga';

});






