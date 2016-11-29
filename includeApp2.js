var app = angular.module("includeApp2", []);

app.controller("include2Ctrl", function ($scope) {
    $scope.items = [
        {
            name: "name 1",
            value: "Value 1"
        },
        {
            name: "name 2",
            value: "Value 2"
        },
        {
            name: "name 3",
            value: "Value 3"
        }
    ]

    $scope.tableView = "tableIn2.html";
    $scope.listView = "listIn2.html";
    $scope.url = "tableIn2.html";

    $scope.listViews = function () {
        $scope.url = $scope.listView;
    };

    $scope.tableViews = function () {
        $scope.url = $scope.tableView;
    };
});