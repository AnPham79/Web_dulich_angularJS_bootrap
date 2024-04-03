app.controller('detailCtrl', function($scope, $http ,$routeParams) {
    $scope.detail = [];
    $http.get(`http://localhost:3000/products/${$routeParams.id}`).then(
        function(res) { // thành công
            $scope.detail = res.data;
        },
        function(res) { // thất bại
            
        }
    )
    
    $scope.comment = function() {
        $http.post(`http://localhost:3000/comments`, {
            "idNews": $routeParams.id,
            "content": $scope.content,
            "name": $scope.users.name,
            "idUser": $scope.users.id,
            "date": new Date().toLocaleString('sv-SE'),
        }).then(
            function(res) {
                $scope.content = '';
                $scope.loadcomments();
            }
        )
    }

    $scope.binhluan = [];
    $scope.loadcomments = function() {
        $http.get(`http://localhost:3000/comments/?idNews=${$routeParams.id}`).then(
            function(res) {
                $scope.binhluan = res.data;
            },
            function(res) {
    
            }
        );
    }
    $scope.loadcomments();
    $scope.limit = 4;

    $scope.deleteComment = function(id) {
        $http.delete(`http://localhost:3000/comments/${id}`).then({
            function(res) {

            },
            function(res) {

            }
        })
    }
});