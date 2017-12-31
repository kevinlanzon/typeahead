app.controller('SearchController', function(getDataFactory) {

	// Data
	var vm = this;

  // Initialize
  getCountries();

  function getCountries() {
    getDataFactory.getCountries()
    .then(function(res) {
      vm.countries = res.data;
    });
  }

});
