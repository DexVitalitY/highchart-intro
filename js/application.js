$(document).ready(function(){

var newDate;
var price; 
var newItem = {};
var newData = [];

var request = {
	 type: 'GET',
      url: 'https://www.quandl.com/api/v1/datasets/SF1/ATVI_REVENUE_ARQ.json?auth_token=sNG5GqFZke58NEGogm_T',
      dataType: 'json',
      success: function(response){

        response.data.forEach(function(item) {
	      newDate = new Date(item[0]);
	      price = item[1];

	      newItem = {};
	      // x-axis = time 
	      // y-axis = price, $
	      newItem.x = newDate;
	      newItem.y = price;

	      newData.unshift(newItem);
        });

        console.log(newData);

        initializeHighChart();
      }   	
 };

//this grabs all data with arrays of 2. 
 // response.data 

//now to convert all the data[0] to convert the dates to the proper format so we can use it in HighCharts
// for (var i = 0, i < response.data.length; i++) {} etc... OR

$.ajax(request);

function initializeHighChart() {
	var highchartConfig = {
		chart: {
			type: 'spline'
		},
		colors: ['orange', 'lightblue', 'lightgreen'],
		title: {
			text:'Activision Blizzard Inc.',
			x:-20 //center
		},
		subtitle: {
			text:'Quarterly Reports',
			x:-20 //center
		},
		xAxis: {
			type: 'datetime'
		},
		yAxis: {
			title: {
				text: 'Earnings'
			}
		},
		series: [{
			name: 'Revenue',
			data: newData
		}]
	};

	$('#chart').highcharts(highchartConfig);
}


// $(function () {
//     $('#container').highcharts({
//         title: {
//             text: 'Activision Blizzard Inc.',
//             // x: -20 //center
//         }
//     });
// }
	


});




// _____________________________________ This Stuff Is Just Another Way ______________________________________
// function getRetailGas() {
//   $.ajax({
//       type: 'GET',
//       url: 'https://www.quandl.com/api/v1/datasets/BTS_MM/RETAILGAS.json',
//       dataType: 'json',
//       success: function(response){
//       var newData = [];

//         response.data.forEach(function(item) {
// 	      newDate = new Date(item[0]);
// 	      price = item[1];
// 	      newItem = [newDate, price];
// 	      newData.push(newItem);
//       }
//     });

//         console.log(newData);
//   }
// getRetailGas();


