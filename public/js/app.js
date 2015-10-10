


var itemApp = angular.module('itemApp', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
});

itemApp.controller('itemsController', function($scope, $http) {

    $scope.items = [];
    $scope.lastpage=1;

    $scope.init = function() {
        $scope.lastpage=1;
        $http({
            url: '/api/items',
            method: "GET",
            params: {page:  $scope.lastpage}
        }).success(function(data, status, headers, config) {
            $scope.items = data.data;
            $scope.currentpage = data.current_page;
        });
    };

    $scope.init();


    $scope.loadMore = function() {
        console.log("Test ...");
        $scope.lastpage +=1;
        $http({
            url: '/api/items',
            method: "GET",
            params: {page:  $scope.lastpage}
        }).success(function (data, status, headers, config) {

                $scope.items = data.data;
                // $scope.items = $scope.items.concat(data.data);
                //console.log("Test ...");

        });
    };

});
