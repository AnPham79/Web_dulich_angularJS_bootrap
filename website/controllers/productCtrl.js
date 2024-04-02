app.controller("productCtrl", function ($scope, $http) {
  $scope.currentPage = 1;
  $scope.productPerPage = 9;

  $http.get("http://localhost:3000/products").then(
    function (res) {
      $scope.products = res.data;

      $scope.quantityProduct = res.data.length;

      $scope.pages = Math.ceil($scope.quantityProduct / $scope.productPerPage);

      $scope.arraypage = [];
      for (var i = 1; i <= $scope.pages; i++) {
        $scope.arraypage.push(i);
      }

      $scope.setCurrentPage = function (page) {
        $scope.currentPage = page;
        $scope.begin = ($scope.currentPage - 1) * $scope.productPerPage;
      };
    },
    function (res) {
      // Xử lý lỗi nếu cần
    }
  );

  // $scope.prev = function (page) {
  //     if (page > 1) {
  //         $scope.currentPage = page - 1;
  //     }
  // };

  // $scope.next = function (page) {
  //     if (page < $scope.pages) {
  //         $scope.currentPage = page + 1;
  //     }
  // };

  $scope.sortkind = function (order) {
    var url = "http://localhost:3000/products/";
    if (order === "international") {
      url += "?kind=quốc tế";
      $http.get(url).then(
        function (res) {
          $scope.products = res.data;
        },
        function (res) {
          console.error("Lỗi khi lấy dữ liệu từ API");
        }
      );
    } else if (order === "domestic") {
      url += "?kind=trong nước";
      $http.get(url).then(
        function (res) {
          $scope.products = res.data;
        },
        function (res) {
          console.error("Lỗi khi lấy dữ liệu từ API");
        }
      );
    } else if (order === "default") {
      url = 'http://localhost:3000/products';
      $http.get(url).then(
        function (res) {
          $scope.products = res.data;
        },
        function (res) {
          console.error("Lỗi khi lấy dữ liệu từ API");
        }
      );
    }
  };
});
