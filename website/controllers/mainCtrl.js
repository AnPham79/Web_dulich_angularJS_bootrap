app.controller("mainCtrl", function ($http, $scope, $rootScope) {
  $rootScope.users = {};

  if (localStorage.getItem("users")) {
    $rootScope.users = JSON.parse(localStorage.getItem("users"));
  }

  $scope.logout = function () {
    localStorage.removeItem("users");
    $rootScope.users = {};
  };

  if (localStorage.getItem("cart")) {
    $rootScope.cart = JSON.parse(localStorage.getItem("cart"));
  } else {
    $rootScope.cart = [];
  }

  $rootScope.addToCart = function (sp) {
    let incart = false;
    $scope.cart.forEach(function (product) {
      if (product.id == sp.id) {
        incart = true;
        product.quantity++;
      }
    });

    if (!incart) {
      sp.quantity = 1;
      $scope.cart.push(sp);
    }

    localStorage.setItem("cart", JSON.stringify($rootScope.cart));
  };

  $rootScope.tinhtong = function () {
    let tong = 0;
    if ($rootScope.cart) {
      $rootScope.cart.forEach((sp) => {
        tong += sp.price * sp.quantity;
      });
    }
    return tong;
  };
});
