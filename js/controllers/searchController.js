app.controller('SearchController', function(getDataFactory) {

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

  function viewDetails() {
    console.log(vm.name);
  }

});
