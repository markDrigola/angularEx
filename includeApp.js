var app = angular.module("includeApp", []);

app.controller("includeCtrl", function ($scope) {
    $scope.items = [
        {
            name: "name 1",
            prop: 1
        },
        {
            name: "name 2",
            prop: 2
        },
        {
            name: "name 3",
            prop: 3
        }
    ]

    $scope.url = "table.html"
});