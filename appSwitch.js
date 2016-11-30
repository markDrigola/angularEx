var app = angular.module("switchApp", []);

app.controller("switchCtrl", function ($scope) {
    $scope.items = [
        {
            name: "name1",
            value: 10
        },
        {
            name: "name2",
            value: 20
        },
        {
            name: "name3",
            value: 30
        }
    ];

    $scope.options = [
        {
            display: "Таблица",
            value: "table"
        },
        {
            display: "Список",
            value: "list"
        },
        {
            display: "Список с маркерами",
            value: "budges"
        }
    ];

    $scope.mode = $scope.options[0];
});