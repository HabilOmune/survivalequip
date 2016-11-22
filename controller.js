

var survivalequip = angular.module('survivalequip', ['ui.bootstrap']);

survivalequip.controller('productsCtrl', function ($scope, $http, $rootScope, $timeout) {

    $scope.setPrd = function (value) {
        $rootScope.selectedProduct = value;
    }

        $scope.setSubPrd = function (product) {
        $scope.desc = true;
        $rootScope.selectedSubProduct = product;
    }



$http
({
    method: 'GET',
    url: 'https://survival-eqip-limited.firebaseio.com/products.json',
})
.then(function(res){
 $scope.products = res.data;
})
.catch(function(err){
console.log(err);
$scope.products = {};
})



   

    $scope.populate = function (value, key) {
        $rootScope.detail = value;
        $rootScope.heading = key;
        $scope.img = value.images;
    };
})