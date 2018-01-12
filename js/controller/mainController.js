app.controller('mainController', function($scope) {
  $scope.Book1 = {
    name: 'The book of life',
    year: 2013,
    genre: 'life'
  };

  $scope.Book2 = {
    name: 'How to be a Developer',
    year: 2014,
    genre: 'Study'
  };

  $scope.Book3 = {
    name: 'Why not to be a Developer',
    year: 2012,
    genre: 'Study'
  };

  $scope.Book4 = {
    name: 'Testing',
    year: '"noYear"',
    genre: '"no-genre"'
  };
});
// input controller
app.controller('input', function ($scope) {
  $scope.name = 'Ashum499@gmail.com'
});

app.controller('timeoutFun', function ($scope, $timeout) {
  $scope.name = 'Ali'
  $timeout(function () {
    $scope.name = 'Karan'
  }, 4000)
});
// http data controller
app.controller('httpData', function ($scope, $http) {
  $http.get('http://localhost/angular-app/json/data.json').then(function (response) {
    // $scope.maData = [];
    $scope.maData = response.data;
  }, function (response) {
    $scope.maData = response.statusText;
  });
});
// select options with angular
app.controller('selOpts', function ($scope) {
  $scope.names = [
    {
      name: 'Ali',
      age: 21,
      profession: 'Developer'
    },
    {
      name: 'Jaskaran',
      age: 23,
      profession: 'Developer'
    },
    {
      name: 'Jaswinder',
      age: 28,
      profession: 'Developer (beginner)'
    }
  ];
});
// routing practice
app.controller('rCont', ['$scope', '$log', '$location', function ($scope, $log, $location) {
  $log.info($location.path())
}]);
