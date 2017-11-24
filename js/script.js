window.onload = function () {

	var charts = [
		new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			data: [{
				type: "column",
				// showInLegend: true,
				// legendMarkerColor: "grey",
				// legendText: "MMbbl = one million barrels",
				dataPoints: [
					{ y: 808000, label: "W" },
					{ y: 172503, label: "S" },
					{ y: 1808000, label: "T" },
					{ y: 2966455, label: "M" },
					{ y: 1169709, label: "F" },
					{ y: 2966455, label: "T" },
					{ y: 808000, label: "F" },
					{ y: 2966455, label: "w" },
					{ y: 1158400, label: "S" },
					{ y: 991500, label: "M" },
					{ y: 2966455, label: "T" },
					{ y: 957800, label: "T" },
					{ y: 808000, label: "S" }
				]
			}]
		}),
		new CanvasJS.Chart("test", {
			animationEnabled: true,
			data: [{
				type: "doughnut",
				startAngle: 60,
				//innerRadius: 60,
				indexLabelFontSize: 17,
				indexLabel: "{label} - #percent%",
				toolTipContent: "<b>{label}:</b> {y} (#percent%)",
				dataPoints: [
					{ y: 77, label: "APPLICANTS" },
					{ y: 28, label: "NULL" },
				]
			}],
		}),
		new CanvasJS.Chart("test2", {
			animationEnabled: true,
			data: [{
				type: "doughnut",
				startAngle: 60,
				//innerRadius: 60,
				indexLabelFontSize: 17,
				indexLabel: "{label} - #percent%",
				toolTipContent: "<b>{label}:</b> {y} (#percent%)",
				dataPoints: [
					{ y: 57,label: "INTERVIEWS"},
					{ y: 58,label: "NULL"},
				]
			}],
		}),
		new CanvasJS.Chart("test3", {
			animationEnabled: true,
			data: [{
				type: "doughnut",
				startAngle: 60,
				//innerRadius: 60,
				indexLabelFontSize: 17,
				indexLabel: "{label} - #percent%",
				toolTipContent: "<b>{label}:</b> {y} (#percent%)",
				dataPoints: [
					{ y: 77,label: "FORWARDS"},
					{ y: 58, label: "NULL" },
				]
			}],
		})
	]
	for (let i = 0; i < charts.length; i++) {
		charts[i].render();
	}

}