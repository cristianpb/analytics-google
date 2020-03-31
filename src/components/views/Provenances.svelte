<p>Provenance :</p>

<canvas id="provenances-chart" on:click={handleClick}></canvas>

<script>
  import { data as dataCsv } from '../tools/stores.js';
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
            label: "My First dataset",
            backgroundColor: '',
            borderColor: '',
            data: []
          }
        ]
      },
      options:{}
    });
  });

  const unsubscribe = dataCsv.subscribe(myData => {
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
    provenancesChart.data.labels = labels
    provenancesChart.data.datasets[0].data = data
    provenancesChart.data.datasets[0].backgroundColor = colors.slice(0, labels.length)
    provenancesChart.data.datasets[0].borderColor = colors.slice(0, labels.length)
    provenancesChart.update();
  }


  function handleClick(event) {
    const activePoints = provenancesChart.getElementsAtEvent(event);
    if (activePoints[0]) {
      const idx = activePoints[0]['_index'];
      dataCsv.update(v => v.filter(x => x.source === Object.keys(provenances)[idx]))
    }
  }

</script>
