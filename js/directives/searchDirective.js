app.directive('search', function($timeout) {
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

      $timeout(function() {
        scope.select();
      });

    };
  },
    templateUrl: 'views/search-results.html'
  }
});
