<p>Devices :</p>

<canvas id="devices-chart" on:click={handleClick} height="400px"></canvas>

<script>
  import { data as dataCsv, results, lastWeek, lastWeekTemp } from '../tools/stores.js';
  import { onMount } from "svelte";
  import Chart from "chart.js";
  let devices;
  let devicesChart;
  let colors = ['#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788']

  onMount(async () => {
    const ctx = document.getElementById("devices-chart").getContext("2d");
    devicesChart = new Chart(ctx, {
      type: 'doughnut',
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

  const unsubscribe = results.subscribe(myData => {
    if (myData.length > 0) {
      devices = myData.reduce((total, s) => {
        if (s.device in total) {
          total[s.device] += s.sessions;
        } else {
          total[s.device] = s.sessions;
        }
        return total
      }, {})
      renderChart(Object.keys(devices),Object.values(devices))
    }
  })

  function renderChart(labels, data) {
    devicesChart.data.labels = labels
    devicesChart.data.datasets[0].data = data
    devicesChart.data.datasets[0].backgroundColor = colors.slice(0, labels.length)
    devicesChart.data.datasets[0].borderColor = colors.slice(0, labels.length)
    devicesChart.update();
  }


  function handleClick(event) {
    const activePoints = devicesChart.getElementsAtEvent(event);
    if (activePoints[0]) {
      const idx = activePoints[0]['_index'];
      const device = Object.keys(devices)[idx]
      $results = $dataCsv.filter(x => x.device === device)
      $lastWeekTemp = $lastWeek.filter(x => x.device === device)
    }
  }

</script>
