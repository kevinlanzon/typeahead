app.directive('search', function() {
  return {
    scope: {
      results: '=',
      placeholder: '=',
      model: '=',
      select: '='
    },
  link: function(scope, element, attrs) {
    scope.selectResult = function(result) {
      scope.model = result;
      scope.select(result);
    };
  },
    templateUrl: 'views/search-results.html'
  }
});
