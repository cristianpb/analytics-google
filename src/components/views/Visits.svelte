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
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: []
          }
        ]
      },
      options:{}
    });
  });

  const unsubscribe = results.subscribe(myData => {
    if (myData.length > 0) {
      visits = myData.reduce((total, s) => {
        let day = `${s.dd.getFullYear()}${("0" + (s.dd.getMonth() + 1)).slice(-2)}${("0" + s.dd.getDate()).slice(-2)}`
        if (day in total) {
          total[day] += s.sessions;
        } else {
          total[day] = s.sessions;
        }
        return total
      }, {})
      renderChart(Object.keys(visits),Object.values(visits))
    }
  })

  function renderChart(labels, data) {
    visitChart.data.labels = labels
    visitChart.data.datasets[0].data = data
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
