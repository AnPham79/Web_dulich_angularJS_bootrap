app.controller('homeCtrl', function($scope, $http){
    $http.get('http://localhost:3000/products?hot=1').then(

    )
});