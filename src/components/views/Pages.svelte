<p>Visits per pages:</p>

<canvas id="pages-chart" on:click={handleClick}></canvas>

<script>
  import { data as dataCsv } from '../tools/stores.js';
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

  const unsubscribe = dataCsv.subscribe(myData => {
    if (myData.length > 0) {
      pages = myData.reduce((total, s) => {
        if (s.pagePath in total) {
          total[s.pagePath] += s.sessions;
        } else {
          total[s.pagePath] = s.sessions;
        }
        return total
      }, {})
      renderChart(Object.keys(pages),Object.values(pages))
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
    pagesChart.data.labels = Object.keys(sortedValues)
    pagesChart.data.datasets[0].data = Object.values(sortedValues)
    pagesChart.update();
  }

  function handleClick(event) {
    const activePoints = pagesChart.getElementsAtEvent(event);
    if (activePoints[0]) {
      const idx = activePoints[0]['_index'];
      dataCsv.update(v => v.filter(x => x.pagePath === Object.keys(pages)[idx]))
    }
  }

</script>
