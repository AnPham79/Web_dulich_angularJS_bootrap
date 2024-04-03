app.controller('mainCtrl', function ($scope, $rootScope) {
    $rootScope.users = {};
    
    if(localStorage.getItem('users')) {
        $rootScope.users = JSON.parse(localStorage.getItem('users'));
    };

    $scope.logout = function() {
        localStorage.removeItem('users');
        $rootScope.users = {};
    }
})