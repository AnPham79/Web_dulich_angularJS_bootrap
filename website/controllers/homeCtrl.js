app.controller('homeCtrl', function($scope, $http){
    $http.get('http://localhost:3000/products?hot=1').then(
        function(res) { // thành công
            $scope.danhsachtourhot = res.data;
        },
        function(res) { // thất bại

        }
    )
    $http.get('http://localhost:3000/products?kind=trong nước').then(
        function(res) { // thành công
            $scope.danhsachtourtrongnuoc = res.data;
        },
        function(res) { // thất bại

        }
    )
    $http.get('http://localhost:3000/news').then(
        function(res) { // thành công
            $scope.tintuc = res.data;
        },
        function(res) { // thất bại

        }
    )
}) 