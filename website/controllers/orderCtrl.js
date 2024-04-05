app.controller("orderCtrl", function ($scope, $rootScope, $http, $location) {
  $scope.tatcatinh = [];
  $scope.tinh = null;
  $scope.huyen = null;
  $scope.xa = null;
  $scope.users = {};

  $http
    .get(
      "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
    )
    .then(
      function (res) {
        $scope.tatcatinh = res.data;
      },
      function (res) {}
    );

  $scope.actionOrder = function () {
    $http
      .post(`http://localhost:3000/orders`, {
        name: $scope.users.name,
        phone: $scope.users.phone,
        address1: $scope.users.address,
        address2: {
          province: $scope.tinh ? $scope.tinh.Name : null,
          district: $scope.huyen ? $scope.huyen.Name : null,
          ward: $scope.xa ? $scope.xa.Name : null,
        },
        idUser: $scope.users.id,
        product: $rootScope.cart,
        total: $rootScope.tinhtong(),
        status: 'Chờ xác nhận',
        date: new Date().toLocaleString("sv-SE"),
      })
      .then(function (response) {
        $rootScope.cart = [];
        localStorage.removeItem("cart");  
        $location.path('/');
      })
      .catch(function (error) {
        // Xử lý lỗi nếu có
      });
  };
});
