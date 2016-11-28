

var survivalequip = angular.module('survivalequip', ['ui.bootstrap']);

survivalequip.controller('productsCtrl', function ($scope, $http, $rootScope, $timeout) {

$scope.getDefult = function(){
    $http
        ({
            method: 'GET',
            url: 'https://survival-eqip-limited.firebaseio.com/products/Meals Ready To Eat.json',
        })
        .then(function (res) {
        $rootScope.selectedProduct = res.data;
        })
}

$scope.getDefult();

    $scope.setPrd = function (value) {
        $rootScope.selectedProduct = value;
        console.log(value);

    }

    $scope.setSubPrd = function (product) {
        $scope.desc = true;
        $rootScope.selectedSubProduct = product;
    }

    $http({
        method: "GET",
        url: 'https://survival-eqip-limited.firebaseio.com/clients.json',
    })
        .then(function (res) {
         //   console.log(res.data);
            $rootScope.clients = res.data
        })
        .catch(function (err) {
            console.log(err);
        })

    $http
        ({
            method: 'GET',
            url: 'https://survival-eqip-limited.firebaseio.com/products.json',
        })
        .then(function (res) {
            $scope.products = res.data;
        })
        .catch(function (err) {
            console.log(err);
        })





    $scope.populate = function (value, key) {
        $rootScope.detail = value;
        $rootScope.heading = key;
        $scope.img = value.images;
    };
})