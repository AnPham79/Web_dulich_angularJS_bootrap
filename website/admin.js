var app = angular.module('admin', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardCtrl',
    })
    .otherwise({
        template : "404 không tìm thấy file"
    });
})