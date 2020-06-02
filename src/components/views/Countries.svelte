<canvas id="countries-chart" on:click={handleClick}></canvas>

<script>
  import { data as dataCsv, results, lastWeek, lastWeekTemp } from '../tools/stores.js';
  import { onMount } from "svelte";
  import Chart from "chart.js";
  let countries;
  let countriesChart;

  onMount(async () => {
    const ctx = document.getElementById("countries-chart").getContext("2d");
    countriesChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [],
        datasets: [
          {
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: []
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      }

    });
  });

  const unsubscribe = results.subscribe(myData => {
    if (myData.length > 0) {
      let countriesUnsorted = myData.reduce((total, s) => {
        if (s.country in total) {
          total[s.country] += s.sessions;
        } else {
          total[s.country] = s.sessions;
        }
        return total
      }, {})
      countries = Object.keys(countriesUnsorted)
        .map((item, idx) => { 
          return {data: countriesUnsorted[item], label: item }
        })
        .sort(function(a, b) {
          return b.data - a.data;
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

      renderChart(Object.keys(countries),Object.values(countries))
    }
  })

  function renderChart(labels, data) {
    countriesChart.data.labels = labels
    countriesChart.data.datasets[0].data = data
    countriesChart.update();
  }

  function handleClick(event) {
    const activePoints = countriesChart.getElementsAtEvent(event);
    if (activePoints[0]) {
      const idx = activePoints[0]['_index'];
      const country = Object.keys(countries)[idx]
      $results = $dataCsv.filter(x => x.country === country)
      $lastWeekTemp = $lastWeek.filter(x => x.country === country)
    }
  }

</script>
