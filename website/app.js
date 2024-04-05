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
    .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'productCtrl',
    })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
    })
    .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'registerCtrl',
    })
    .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'cartCtrl',
    })
    .when('/order', {
        templateUrl: 'views/order.html',
        controller: 'orderCtrl',
    })
    .when('/orderHistory', {
        templateUrl: 'views/orderHistory.html',
        controller: 'orderCtrl',
    })
    .otherwise({
        template : "404 không tìm thấy file"
    });
})