app.config(function($stateProvider) {

$stateProvider

  .state('search', {
    url: '',
    views: {
      content: {
      templateUrl: 'views/search.html'
      }
    }
  })

  .state('details', {
    url: '/details/{name}',
    views: {
      content: {
      templateUrl: 'views/details.html'
      }
    }
  });

});
