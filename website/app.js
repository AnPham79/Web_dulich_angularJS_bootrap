var app = angular.module('myapp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
    })
    .when('/news', {
        templateUrl: 'views/news.html'
    })
    .when('/cart', {
        templateUrl: 'views/cart.html'
    })
    .otherwise({
        template : "404 không tìm thấy file"
    });
})