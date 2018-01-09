app.directive('appName', function () {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    templateUrl: 'js/directive/appInfo.html'
  };
});
