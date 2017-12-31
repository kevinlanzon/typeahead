app.factory('getDataFactory', function($http) {

  var API = {};

  API.getCountries = function() {
    var req = {
      method: 'GET'
    };

    req.url = 'countries.json';

    return $http(req);
  };

  return API;
});
