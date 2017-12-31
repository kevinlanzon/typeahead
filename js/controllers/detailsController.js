app.controller('DetailsController', function($window, $state, getDataFactory) {

	// Data
  var vm = this;
  var name = $state.params.name;
  vm.back = back;

  getDataFactory.getCountryDetails(name)
  .then(function(res) {
    var details = res.data[0];
    vm.name = details.name;
    vm.capital = details.capital;
    vm.flag = details.flag;
    vm.currency = details.currencies[0].name;
    vm.language = details.languages[0].name;
    vm.population = details.population;
  });

  function back() {
    $window.history.back();
  }

});
