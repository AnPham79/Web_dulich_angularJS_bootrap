app.controller("dashboardCtrl", function ($http, $scope, $rootScope, $location) {
  $rootScope.lichsumuahang = [];
  $rootScope.loadHistory = function () {
    $http.get("http://localhost:3000/orders/").then(
      function (res) {
        $rootScope.lichsumuahang = res.data;
      },
      function (res) {}
    );
  };
  $rootScope.loadHistory();

  $scope.logout = function () {
    localStorage.removeItem("users");
    $rootScope.users = {};
    alert('Đăng xuất thành công');
    window.location.href = 'http://127.0.0.1:5501/website/#!/';
  };

  $scope.waybackhome = function () {
    window.location.href = 'http://127.0.0.1:5501/website/#!/';
  };

  $rootScope.updateStatus = function (order) {
    $http
      .patch(`http://localhost:3000/orders/${order.id}`, {
        status: order.status,
      })
      .then(
        function (res) {
          alert("Cập nhật trạng thái thành công");
        },
        function (res) {
          alert("Đã xảy ra lỗi khi cập nhật trạng thái đơn hàng");
        }
      );
  };
});
