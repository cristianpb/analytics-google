<script>
	import { data as dataCsv, results, lastWeek, lastWeekTemp } from '../tools/stores.js';
	import { onMount } from 'svelte';
	import Chart from 'chart.js';
	let visits;
	let visitChart;
	let visitsLast;
	let daysWeek = {
		0: 'Sunday',
		1: 'Monday',
		2: 'Tuesday',
		3: 'Wednesday',
		4: 'Thursday',
		5: 'Friday',
		6: 'Saturday'
	};

	onMount(async () => {
		const ctx = document.getElementById('visits-chart').getContext('2d');
		visitChart = new Chart(ctx, {
			type: 'line',
			data: {
				datasets: [
					{
						label: 'This week',
						backgroundColor: '#2171b5',
						borderColor: '#2171b5',
						fill: false,
						data: []
					},
					{
						label: 'Last week',
						backgroundColor: '#c6dbef',
						borderColor: '#c6dbef',
						fill: false,
						borderDash: [10, 5],
						xAxisID: 'axisLastWeek',
						data: []
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					xAxes: [
						{
							id: 'axisThisWeek',
							type: 'time',
							ticks: {
								min: 0,
								max: 1586000000000
							}
						},
						{
							id: 'axisLastWeek',
							type: 'time',
							display: false,
							gridLines: {
								drawOnChartArea: false
							}
						}
					],
					yAxes: [
						{
							id: 'temp-y-axis',
							type: 'linear',
							position: 'left',
							scaleLabel: {
								display: true,
								labelString: 'Number of sessions'
							}
						}
					]
				},
				tooltips: {
					mode: 'nearest',
					intersect: false,
					callbacks: {
						title: function (tooltipItems, data) {
							let { index } = tooltipItems[0];
							let { datasetIndex } = tooltipItems[0];
							let date = data.datasets[datasetIndex].data[index].x;
							return `${daysWeek[date.getDay()]} ${('0' + date.getDate()).slice(-2)} / ${(
								'0' +
								(date.getMonth() + 1)
							).slice(-2)} / ${date.getFullYear()}`;
						}
					}
				}
			}
		});
	});

	const r = results.subscribe((myData) => {
		if (myData.length > 0 && visitChart) {
			visits = myData.reduce(sumPerDay, {});
			renderChart(Object.values(visits), 0);
			if (Object.values(visits).length === 1) {
				visitChart.options.scales.xAxes[0].ticks.min = +Object.values(visits)[0].x - 300000000;
				visitChart.options.scales.xAxes[0].ticks.max = +Object.values(visits)[0].x + 300000000;
			} else {
				visitChart.options.scales.xAxes[0].ticks.min = +Object.values(visits)[0].x;
				visitChart.options.scales.xAxes[0].ticks.max =
					+Object.values(visits)[Object.keys(visits).length - 1].x;
			}
			visitChart.update();
		}
	});

	const l = lastWeekTemp.subscribe((myData) => {
		if (myData && myData.length > 0 && visitChart) {
			visitsLast = myData.reduce(sumPerDay, {});
			renderChart(Object.values(visitsLast), 1);
			if (Object.values(visitsLast).length === 1) {
				visitChart.options.scales.xAxes[1].ticks.min = +Object.values(visitsLast)[0].x - 300000000;
				visitChart.options.scales.xAxes[1].ticks.max = +Object.values(visitsLast)[0].x + 300000000;
			} else {
				visitChart.options.scales.xAxes[1].ticks.min = +Object.values(visitsLast)[0].x;
				visitChart.options.scales.xAxes[1].ticks.max =
					+Object.values(visitsLast)[Object.keys(visitsLast).length - 1].x;
			}
			visitChart.update();
		}
	});

	function sumPerDay(total, s) {
		if (s.day in total) {
			total[s.day].y += s.sessions;
		} else {
			total[s.day] = { x: s.dd, y: s.sessions };
		}
		return total;
	}

	function renderChart(data, idx) {
		visitChart.data.datasets[idx].data = data.map((x) => {
			return { x: x.x, y: x.y };
		});
		visitChart.update();
	}

	function handleClick(event) {
		const activePoints = visitChart.getElementsAtEvent(event);
		if (activePoints[0]) {
			const idx = activePoints[0]['_index'];
			const day = Object.keys(visitsLast)[idx];
			$results = $dataCsv.filter((x) => x.day === day);
			$lastWeekTemp = $lastWeek.filter((x) => x.day === day);
		}
	}
</script>

<canvas id="visits-chart" on:click={handleClick} />
