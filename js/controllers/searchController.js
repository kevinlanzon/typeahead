app.controller('SearchController', function($state, getDataFactory) {

  // Data
  var vm = this;
  vm.name = '';
  vm.placeholder = 'Search for a country';

  // View Functions
  vm.viewDetails = viewDetails;

  // Initialize
  getCountries();

  function getCountries() {
    getDataFactory.getCountries()
    .then(function(res) {
      vm.countries = res.data;
    });
  }

  function viewDetails(name) {
    $state.go('details', {
      'name': name
    });
  }

});
