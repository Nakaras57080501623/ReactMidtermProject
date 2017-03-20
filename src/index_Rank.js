import React, { Component } from 'react';
import './style_Home.css';
import './style_Home_Text.css';
import './style.css';
import './style_Rank.css';
import './style_Time.css';
import  './index_Rank.js';


<link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Kanit|Open+Sans" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

  
<link rel="stylesheet" href="css/style_Time.css">


<link rel="stylesheet" href="css/style.css">

export class Edit_Rank extends Component {

  render() {
    
      return (//this is an associative array! we are defining the values from the keys (the dropdown options) to use in the function.

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

 );
  }
}
 
}


export default Edit_Rank;