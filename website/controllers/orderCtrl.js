app.controller("orderCtrl", function ($scope, $rootScope, $http, $location, $routeParams) {
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
        idUser: $rootScope.users.id,
        name: $scope.users.name,
        phone: $scope.users.phone,
        address1: $scope.users.address,
        address2: {
          province: $scope.tinh ? $scope.tinh.Name : null,
          district: $scope.huyen ? $scope.huyen.Name : null,
          ward: $scope.xa ? $scope.xa.Name : null,
        },
        product: $rootScope.cart,
        total: $rootScope.tinhtong(),
        status: 'Chờ xác nhận',
        date: new Date().toLocaleString("sv-SE"),
      })
      .then(function (response) {
        $rootScope.cart = [];
        localStorage.removeItem("cart");
        alert('Chúc mừng bạn đã đặt hàng thành công') 
        $location.path('/');
      })
      .catch(function (error) {
        // Xử lý lỗi nếu có
      });
  };

  $rootScope.lichsumuahang = [];
  $rootScope.loadHistory = function () {
    $http.get(`http://localhost:3000/orders/?idUser=${$rootScope.users.id}`).then(
      function (res) {
        $rootScope.lichsumuahang = res.data;
      },
      function (res) {}
    );
  };
  $rootScope.loadHistory();
});
