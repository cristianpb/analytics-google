<p>Countries:</p>

<canvas id="countries-chart" on:click={handleClick}></canvas>

<script>
  import { data as dataCsv, results } from '../tools/stores.js';
  import { onMount } from "svelte";
  import Chart from "chart.js";
  let countries;
  let countriesChart;

  onMount(async () => {
    const ctx = document.getElementById("countries-chart").getContext("2d");
    countriesChart = new Chart(ctx, {
      type: "horizontalBar",
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
      countries = myData.reduce((total, s) => {
        if (s.country in total) {
          total[s.country] += s.sessions;
        } else {
          total[s.country] = s.sessions;
        }
        return total
      }, {})
      renderChart(Object.keys(countries),Object.values(countries))
    }
  })

  function renderChart(labels, data) {
    let sortedValues = labels
      .map((item, idx) => { 
        return {data: data[idx], label: labels[idx] }
      })
      .sort(function(a, b) {
        return b.data>a.data;
      })
      .reduce((total, s, idx) => {
        if (idx > 10) {
          if ('Others' in total) {
            total.Others += s.data
          } else {
            total.Others = s.data
          }
        } else {
          total[s.label] = s.data
        }
        return total
      }, {});
    countriesChart.data.labels = Object.keys(sortedValues)
    countriesChart.data.datasets[0].data = Object.values(sortedValues)
    countriesChart.update();
  }

  function handleClick(event) {
    const activePoints = countriesChart.getElementsAtEvent(event);
    if (activePoints[0]) {
      const idx = activePoints[0]['_index'];
      $results = $dataCsv.filter(x => x.country === Object.keys(countries)[idx])
    }
  }

</script>
