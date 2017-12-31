app.directive('search', function() {
  return {
    scope: {
      results: '=',
      placeholder: '=',
      model: '=',
      select: '&'
    },
  link: function(scope, elem, attrs) {
    scope.selectResult = function(result) {
      scope.model = result;
      scope.select();
    };
  },
    templateUrl: 'views/search-results.html'
  }
});
