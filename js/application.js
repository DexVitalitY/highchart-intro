$(document).ready(function(){

function getRetailGas() {
  $.ajax({
      type: 'GET',
      url: 'https://www.quandl.com/api/v1/datasets/BTS_MM/RETAILGAS.json',
      dataType: 'json',
      success: function(response){
      console.log(response);
      }
    });

  }
getRetailGas();


});