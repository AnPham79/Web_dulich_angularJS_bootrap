app.controller('detailCtrl', function($scope, $http ,$routeParams) {
    $scope.detail = [];
    $http.get(`http://localhost:3000/products/${$routeParams.id}`).then(
        function(res) { // thành công
            $scope.detail = res.data;
        },
        function(res) { // thất bại
            
        }
    )
});