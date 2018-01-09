app.directive('myDir', function () {
  return {
    restrict: 'M',
    replace: true,
    template: '<h1>Hello how are you <span>Ali</span></h1>'
  };
})
