var app = angular.module('myapp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
    })
    .when('/about', {
        templateUrl: 'views/about.html'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html'
    })
    .when('/detail/:id', {
        templateUrl: 'views/detail.html',
        controller: 'detailCtrl',
    })
    .otherwise({
        template : "404 không tìm thấy file"
    });
})