<canvas id="visits-chart" on:click={handleClick}></canvas>

<script>
  import { data as dataCsv, results } from '../tools/stores.js';
  import { onMount } from "svelte";
  import Chart from "chart.js";
  let visits;
  let visitChart;

  onMount(async () => {
    const ctx = document.getElementById("visits-chart").getContext("2d");
    visitChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            fill: false,
            data: []
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            type: 'time',
          }],
          yAxes: [{
            id: 'temp-y-axis',
            type: 'linear',
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: 'Number of sessions'
            }
          }]
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
          //callbacks: {
          //  title: function(tooltipItems, data) {
          //    //let date = tooltipItems[0].xLabel
          //    //let day = `${date.getFullYear()}/${("0" + (date.getMonth() + 1)).slice(-2)}/${("0" + date.getDate()).slice(-2)}`
          //    //return day
          //    return tooltipItems[0].xLabel

          //  }
          //}
        }
      }


    });
  });

  const unsubscribe = results.subscribe(myData => {
    if (myData.length > 0) {
      visits = myData.reduce((total, s) => {
        let day = `${s.dd.getFullYear()}${("0" + (s.dd.getMonth() + 1)).slice(-2)}${("0" + s.dd.getDate()).slice(-2)}`
        if (day in total) {
          total[day].y += s.sessions;
        } else {
          total[day] = {x: s.dd, y: s.sessions};
        }
        return total
      }, {})
      renderChart(Object.values(visits))
    }
  })

  function renderChart(data) {
    visitChart.data.labels = data.map(x => x.x)
    visitChart.data.datasets[0].data = data.map(x => x.y)
    visitChart.update();
  }

  function handleClick(event) {
    const activePoints = visitChart.getElementsAtEvent(event);
    if (activePoints[0]) {
      const idx = activePoints[0]['_index'];
      console.log(idx);
      $results = $dataCsv.filter(x => x.day === Object.keys(visits)[idx])
    }
  }

</script>
