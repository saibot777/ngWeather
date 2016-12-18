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

// SERVICES
weatherApp.service('cityService', function() {

    this.city = "New York, NY";

});

// CONTROLLERS
weatherApp.controller('homeCtrl', ['$scope', 'cityService', function($scope, cityService) {

   $scope.city = cityService.city;

   $scope.$watch('city', function() {
        cityService.city = $scope.city;
   });
    
}]);

weatherApp.controller('weatherCtrl', ['$scope', 'cityService', function($scope, cityService) {

    $scope.city = cityService.city;
    
}]);






