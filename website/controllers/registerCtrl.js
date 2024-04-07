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

    $scope.showpassword = function() {
        const togglePassword = document.getElementById('togglePassword');
        const password = document.getElementById('password');

        togglePassword.addEventListener('click', function() {
            if (password.type === 'password') {
                password.type = 'text';
                togglePassword.textContent = 'Ẩn';
            } else {
                password.type = 'password';
                togglePassword.textContent = 'Hiện';
            }
        });
    }
});
