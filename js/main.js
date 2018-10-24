console.log("connected");

function resultsF() {
var correctArray = ["steve", "washington","1978","dubai","C",
"1492","witcher","hush","google","361"]
var correctA = 0;
var incorrectA = 0;
console.log(correctArray);
for(var i = 0; i < correctArray.length; i++){
  var answer = document.getElementById(correctArray[i]);
  console.log(answer.checked);
  if(answer.checked){
    correctA = correctA + 10;
  } else {
    incorrectA = incorrectA + 10;
  }
}
console.log(correctA);
// pie chart
var chart = new CanvasJS.Chart("chartContainer", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,
	title: {
		text: "Results of test"
	},
	data: [{
		type: "pie",
		startAngle: 25,
		toolTipContent: "<b>{label}</b>: {y}%",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: "{label} - {y}%",
		dataPoints: [
			{ y: correctA, label: "correct" },
			{ y: incorrectA, label: "wrong" }
		]
	}]
});
chart.render();

}
