var app = angular.module("listApp", []);

var listModel = [
    {
        item: "item 1",
        value: "Value 1"
    },
    {
        item: "item 1",
        value: "Value 2"
    },
    {
        item: "item 1",
        value: "Value 3"
    }
];

app.controller("listCtrl", function ($scope) {
    $scope.items = listModel;
});