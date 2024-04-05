app.controller("homeCtrl", function ($scope, $http, $rootScope) {
  // load thêm sản phẩm theo limit
  $scope.limit = 8;
  $scope.loadProduct = "Xem thêm";

  $scope.changeLimitProduct = function () {
    if ($scope.limit + 4 <= $scope.danhsachtourhot.length) {
      $scope.limit += 4;
      if ($scope.limit >= $scope.danhsachtourhot.length) {
        $scope.loadProduct = "Thu về";
      }
    } else {
      $scope.limit = 8;
      $scope.loadProduct = "Xem thêm";
    }
  };

  // tìm tour theo option tranh chủ
  $scope.search = function () {
    var selectedTour = $scope.tatcatour.find(function (tour) {
      return tour.name === $scope.selectedLocation;
    });
    $scope.selectedTour = selectedTour;

    if (!$scope.selectedTour) {
      alert("Bạn chưa chọn tour nào");
    }
  };

  // lấy tất cả sản phẩm
  $http.get("http://localhost:3000/products").then(
    function (res) {
      // thành công
      $scope.tatcatour = res.data;
    },
    function (res) {
      // thất bại
    }
  );

  // lấy tất cả sản phẩm với hot = 0
  $http.get("http://localhost:3000/products?hot=0").then(
    function (res) {
      // thành công
      $scope.danhsachtourhot = res.data;
    },
    function (res) {
      // thất bại
    }
  );

  // lấy tất cả sản phẩm với khu vực ( trong ngoài nước)
  $http.get("http://localhost:3000/products?kind=trong nước").then(
    function (res) {
      // thành công
      $scope.danhsachtourtrongnuoc = res.data;
    },
    function (res) {
      // thất bại
    }
  );

  // lấy tất cả tin tức
  $http.get("http://localhost:3000/news").then(
    function (res) {
      // thành công
      $scope.tintuc = res.data;
    },
    function (res) {
      // thất bại
    }
  );

  // lọc sản phẩm theo giá
  $scope.sort = function (order) {
    if (order === "asc") {
      $scope.danhsachtourhot.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      $scope.danhsachtourhot.sort((a, b) => b.price - a.price);
    }
  };
});
