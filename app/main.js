var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope',function($scope){
   
$scope.removeNinja = function (ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
}

$scope.ninjas = [
    {
        name: 'Jimmy',
        belt: 'Black',
        rate: 50,
        available: true
    },
    {
        name: 'Hayley',
        belt: 'Yellow',
        rate: 30,
        available: true
    },
    {
        name: 'Gabbi',
        belt: 'Green',
        rate: 10,
        available: true
    },
]
}]);