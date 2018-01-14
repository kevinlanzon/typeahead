app.factory('getDataFactory', function($http) {

  var API = {};

  API.getCountries = function() {
    var req = {
      method: 'GET'
    };

    req.url = 'countries.json';

    return $http(req);
  };

  API.getCountryDetails = function(name) {
    var req = {
      method: 'GET'
    };

    req.url = 'https://restcountries.eu/rest/v2/name/' + name;

    return $http(req);
  };

  return API;
});
