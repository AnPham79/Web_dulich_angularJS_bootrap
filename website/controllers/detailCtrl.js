app.controller("detailCtrl", function ($scope, $http, $routeParams, $location, $rootScope) {
  $scope.detail = [];
  $http.get(`http://localhost:3000/products/${$routeParams.id}`).then(
    function (res) {
      // thành công
      $scope.detail = res.data;
    },
    function (res) {
      // thất bại
    }
  );

  $http.get("http://localhost:3000/products/?hot=1").then(
    function (res) {
      // thành công
      $scope.more = res.data;
    },
    function (res) {
      // thất bại
    }
  );

  $scope.comment = function () {
    $http
      .post(`http://localhost:3000/comments`, {
        idNews: $routeParams.id,
        content: $scope.content,
        name: $scope.users.name,
        idUser: $scope.users.id,
        date: new Date().toLocaleString("sv-SE"),
      })
      .then(function (res) {
        $scope.content = "";
        $scope.loadcomments();
      });
  };

  if(localStorage.getItem("cart")) {
    $rootScope.cart = JSON.parse(localStorage.getItem("cart"));
  } else {
    $rootScope.cart = [];
  }
  $rootScope.buyNow = function (sp) {
    let incart = false;
    $scope.cart.forEach(function (product) {
      if(product.id == sp.id) {
          incart = true;
          product.quantity++
      }
    }) 
    
    if(!incart) {
      sp.quantity = 1;
        $scope.cart.push(sp);
    }
    
    localStorage.setItem('cart', JSON.stringify($rootScope.cart));

    $location.path('/order');
}

  $scope.binhluan = [];
  $scope.loadcomments = function () {
    $http.get(`http://localhost:3000/comments/?idNews=${$routeParams.id}`).then(
      function (res) {
        $scope.binhluan = res.data;
      },
      function (res) {}
    );
  };
  $scope.loadcomments();
  $scope.limit = 4;

  $scope.deleteComment = function (id) {
    $http.delete(`http://localhost:3000/comments/${id}`).then({
      function(res) {},
      function(res) {},
    });
  };
});
