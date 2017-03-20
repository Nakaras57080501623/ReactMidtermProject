//this is an associative array! we are defining the values from the keys (the dropdown options) to use in the function.
var make_merit = new Array();
make_merit["Money"] = 1;
make_merit["Build"] = .8;
make_merit["Food"] = .5;
make_merit["Repair"] = .1;
make_merit["Pray"] = .01;

function getPercentage() {
  var ethnicityPercentage = 0;
  var theForm = document.forms["wage-gap"];
  var selectedEthnicity = theForm.elements["make_merits"];


  ethnicityPercentage = make_merit[selectedEthnicity.value];


  return ethnicityPercentage;
}
function getInitialSalary() {
  var theForm = document.forms["wage-gap"];
  var initialSalaryAmount = theForm.elements["salary-initial"];
  var initialSalary = 0;
  if (initialSalaryAmount.value != "") {
    initialSalary = parseInt(initialSalaryAmount.value);
  }
  return initialSalary;
}

function calculateTotal() {
  var getCalculatedSalary = getInitialSalary() * getPercentage();
  var calculatedSalary = Math.round(getCalculatedSalary * Math.pow(10, 2)) / Math.pow(10, 2);

  //display the result
  document.getElementById('salary-calculated').innerHTML = " " + calculatedSalary + " แต้มบุญ";
}