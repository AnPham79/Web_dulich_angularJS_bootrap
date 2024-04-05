app.controller('registerCtrl', function($scope, $http, $location, $rootScope){
    $scope.agree = false;
    $scope.register = function(){
        $http.get('http://localhost:3000/users').then(
            function(res){
                var users = res.data;
                var emailExists = users.some(function(user) {
                    return user.email === $scope.email;
                });
                if (emailExists) {
                    alert('Email mà bạn nhập đã bị trùng');
                } else {
                    $http.post('http://localhost:3000/users', {
                        "name": $scope.name,
                        "email": $scope.email,
                        "password": $scope.password,
                        "phone": $scope.phone,
                        "address": $scope.address,
                        "role": 1
                    }).then(function() {
                        alert('Đăng kí thành công');
                        $location.path('/login');
                    });
                }
            },
            function(res) {
                console.log(res, ': không lấy được thông tin');
            }
        );
    };
});
