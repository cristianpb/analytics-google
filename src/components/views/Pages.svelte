<p>Visits per pages:</p>

<canvas id="pages-chart" on:click={handleClick} height="400px"></canvas>

<script>
  import { data as dataCsv, results } from '../tools/stores.js';
  import { onMount } from "svelte";
  import Chart from "chart.js";
  let pages;
  let pagesChart;

  onMount(async () => {
    const ctx = document.getElementById("pages-chart").getContext("2d");
    pagesChart = new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: [],
        datasets: [
          {
            label: "",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: []
          }
        ]
      },
      options:{
        legend: {
          display: false
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
        }
      }
    });
  });

  const unsubscribe = results.subscribe(myData => {
    if (myData.length > 0) {
      let pagesUnsorted = myData.reduce((total, s) => {
        if (s.pagePath in total) {
          total[s.pagePath] += s.sessions;
        } else {
          total[s.pagePath] = s.sessions;
        }
        return total
      }, {})
      pages = Object.keys(pagesUnsorted)
        .map((item, idx) => { 
          return {label: item, data: pagesUnsorted[item] }
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
      renderChart(Object.keys(pages),Object.values(pages))
    }
  })

  function renderChart(labels, data) {
    pagesChart.data.labels = labels
    pagesChart.data.datasets[0].data = data
    pagesChart.update();
  }

  function handleClick(event) {
    const activePoints = pagesChart.getElementsAtEvent(event);
    if (activePoints[0]) {
      const idx = activePoints[0]['_index'];
      $results = $dataCsv.filter(x => x.pagePath === Object.keys(pages)[idx])
    }
  }

</script>
