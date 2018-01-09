app.controller('login', function ($scope) {
  $scope.name = ''
  $scope.password = ''
  $scope.newName = ''
  $scope.$watch('name', function (oldValue, newValue) {
    $scope.newName = newValue
  });
})
