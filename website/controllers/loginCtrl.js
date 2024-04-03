app.controller('loginCtrl', function($scope, $http, $location, $rootScope){
    $scope.login = function() {
        $http.get(`http://localhost:3000/users?email=${$scope.email}&password=${$scope.password}`).then(
            function(res) {
                if(res.data.length == 0) {
                    $scope.isError = true;
                } else {
                    $rootScope.users = res.data[0]
                    localStorage.setItem('users', JSON.stringify(res.data[0]));
                    $location.path('/');
                }
            },
            function(res) {
                $scope.isError = true;
            }
        )
    }
}) 