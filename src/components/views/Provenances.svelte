<p>Provenance :</p>

<canvas id="provenances-chart" on:click={handleClick} height="400px"></canvas>

<script>
  import { data as dataCsv, results, lastWeek, lastWeekTemp } from '../tools/stores.js';
  import { onMount } from "svelte";
  import Chart from "chart.js";
  let provenances;
  let provenancesChart;
  let colors = ['#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#fee0b6','#fdb863', '#e08214','#b35806'] 
  onMount(async () => {
    const ctx = document.getElementById("provenances-chart").getContext("2d");
    provenancesChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: [],
        datasets: [
          {
            backgroundColor: '',
            borderColor: '',
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
      provenances = myData.reduce((total, s) => {
        if (s.source in total) {
          total[s.source] += s.sessions;
        } else {
          total[s.source] = s.sessions;
        }
        return total
      }, {})
      renderChart(Object.keys(provenances),Object.values(provenances))
    }
  })

  function renderChart(labels, data) {
    let sortedValues = labels
      .map((item, idx) => { 
        return {data: data[idx], label: labels[idx] }
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
    provenancesChart.data.labels = Object.keys(sortedValues)
    provenancesChart.data.datasets[0].data = Object.values(sortedValues)
    provenancesChart.data.datasets[0].backgroundColor = colors.slice(0, labels.length)
    provenancesChart.data.datasets[0].borderColor = colors.slice(0, labels.length)
    provenancesChart.update();
  }


  function handleClick(event) {
    const activePoints = provenancesChart.getElementsAtEvent(event);
    if (activePoints[0]) {
      const idx = activePoints[0]['_index'];
      const provenance = Object.keys(provenances)[idx]
      $results = $dataCsv.filter(x => x.source === provenance)
      $lastWeekTemp = $lastWeek.filter(x => x.source === provenance)
    }
  }

</script>
