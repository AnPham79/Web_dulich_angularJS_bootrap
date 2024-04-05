app.controller('cartCtrl', function($scope, $http ,$routeParams, $rootScope) {
    $scope.saveCart = function() {
        localStorage.setItem('cart', JSON.stringify($rootScope.cart));
    };

    $scope.delete = function(index) {
        $rootScope.cart.splice(index, 1)
        $scope.saveCart();
    }

    $scope.deleteAll = function(index) {
        $rootScope.cart = [];
        $scope.saveCart();
    }
});