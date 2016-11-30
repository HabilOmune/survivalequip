

var survivalequip = angular.module('survivalequip', ['ui.bootstrap', 'firebase']);

survivalequip.controller('productsCtrl', function ($scope, $firebaseArray, $firebaseObject, $http, $rootScope, $timeout) {
    var config = {
        apiKey: "AIzaSyA5DHBONu4Zza7w-ep7uznIXYpRCg6oCzQ",
        authDomain: "survival-eqip-limited.firebaseapp.com",
        databaseURL: "https://survival-eqip-limited.firebaseio.com",
        storageBucket: "survival-eqip-limited.appspot.com",
        messagingSenderId: "115364664381"
    };
    firebase.initializeApp(config);
    $scope.getDefult = function () {

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
        $rootScope.selectedSubProduct = null;

    }

    $scope.setSubPrd = function (product) {
        $scope.desc = true;
        $rootScope.selectedSubProduct = product;
    }


    var ref = firebase.database().ref('clients');
    $rootScope.clients = $firebaseArray(ref);

    var ref = firebase.database().ref('products');
    $scope.products = $firebaseObject(ref);

    $scope.populate = function (value, key) {
        $rootScope.detail = value;
        $rootScope.heading = key;
        $scope.img = value.images;
    };
})