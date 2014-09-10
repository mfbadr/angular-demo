(function(){
  'use strict';

  // name name as ng app
  angular.module('demo', [])
  //these names match up with ng-* attributes in DOM
  .controller('MainController', ['$scope', function($scope){
    $scope.name = 'Groot!';
    $scope.age = 5*2;
    $scope.dogs = [
      {name:'fido', age:3},
      {name:'river', age:2},
      {name:'rex', age:5}
    ];
  }]);

})();
