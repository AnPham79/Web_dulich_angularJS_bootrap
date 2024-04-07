app.controller('loginCtrl', function($scope, $http, $location, $rootScope){
    $scope.login = function() {
        $http.get('http://localhost:3000/users').then(
            function(response) {
                $rootScope.getUsers = response.data;
                $rootScope.users = $rootScope.getUsers.find(function(item) {
                    return $scope.email === item.email && $scope.password === item.password;
                });
                if ($rootScope.users) {
                    if ($rootScope.users.role === 2) {
                        alert('Đăng nhập thành công');
                        localStorage.setItem('users', JSON.stringify($rootScope.users));
                        window.location.href = 'http://127.0.0.1:5501/website/admin.html#!/';
                    } else {
                        alert('Đăng nhập thành công');
                        localStorage.setItem('users', JSON.stringify($rootScope.users));
                        $location.path('/');
                    }
                } else {
                    alert('Email hoặc mật khẩu không chính xác');
                }
            },
            function(error) {
                $scope.isError = true;
            }
        );
    };

    $scope.showPassword = function() {
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
    };
});
