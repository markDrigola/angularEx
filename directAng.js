var app = angular.module("directApp", []);

app.controller("directCtrl", function ($scope) {
    $scope.items = [
        {
            name: "item1",
            value: "Value 1"
        },
        {
            name: "item2",
            value: "Value 2"
        },
        {
            name: "item3",
            value: "Value 3"
        },
        {
            name: "item4",
            value: "Value 4"
        },
        {
            name: "item5",
            value: "Value 5"
        }
    ]
});

//select controller
app.controller("selectCtrl", function ($scope) {
    $scope.items = ["item1","item2","item3","item1"];
    $scope.selected = "item1";
});

//select controller big
app.controller("selectBigCtrl", function ($scope) {
    $scope.items = [
        {
            name: "name1",
            prop: 1
        },
        {
            name: "name2",
            prop: 2
        },
        {
            name: "name3",
            prop: 3
        },
        {
            name: "name4",
            prop: 4
        },
        {
            name: "name5",
            prop: 5
        }
    ];
    $scope.selected = $scope.items[0];
});


