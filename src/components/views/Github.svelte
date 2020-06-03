<p class="is-size-3 has-text-centered">
  Github 
</p>

<div class="columns">
  <div class="column is-6">
    <canvas id="github-views" height="300px"></canvas>
  </div>
  <div class="column is-6">
    <canvas id="github-clones" height="300px"></canvas>
  </div>
</div>

<script>
  import { onMount } from 'svelte';
  import { fetchGithub } from '../../components/tools/getData.js';
  import Chart from "chart.js";
  let visitChart;
  let clonesChart;
  let colors = ['#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#fee0b6','#fdb863', '#e08214','#b35806'] 
  let daysWeek = {0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", }

  onMount(async() => {
    const ctx = document.getElementById("github-views").getContext("2d");
    visitChart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: []
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            id: 'axisThisWeek',
            type: 'time',
          }],
          yAxes: [{
            id: 'temp-y-axis',
            type: 'linear',
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: 'Number of views'
            }
          }]
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
          callbacks: {
            title: function(tooltipItems, data) {
              let { index } = tooltipItems[0]
              let { datasetIndex } = tooltipItems[0]
              let date = data.datasets[datasetIndex].data[index].x;
              return `${daysWeek[date.getDay()]} ${("0" + date.getDate()).slice(-2)} / ${("0" + (date.getMonth() + 1)).slice(-2)} / ${date.getFullYear()}`
            }
          }
        }
      }
    })
    const ctxClones = document.getElementById("github-clones").getContext("2d");
    clonesChart = new Chart(ctxClones, {
      type: "line",
      data: {
        datasets: []
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            id: 'axisThisWeek',
            type: 'time',
          }],
          yAxes: [{
            id: 'temp-y-axis',
            type: 'linear',
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: 'Number of clones'
            }
          }]
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
          callbacks: {
            title: function(tooltipItems, data) {
              let { index } = tooltipItems[0]
              let { datasetIndex } = tooltipItems[0]
              let date = data.datasets[datasetIndex].data[index].x;
              return `${daysWeek[date.getDay()]} ${("0" + date.getDate()).slice(-2)} / ${("0" + (date.getMonth() + 1)).slice(-2)} / ${date.getFullYear()}`
            }
          }
        }
      }
    })

    const myData = await fetchGithub()
    let results = {}
    myData.forEach((item, idx) => {
      if (!(item.repository in results)) {
        results[item.repository] = {
          data: [],
          repository: item.repository
        }
      }
      results[item.repository].data.push({day: item.dd, clones: item.clones, views: item.views})
    });
    Object.keys(results).forEach((key, idx) => {
      visitChart.data.datasets.push(
        {
          label: key,
          backgroundColor: colors[idx],
          borderColor: colors[idx],
          fill: false,
          data: results[key].data.filter(x => x.views > 0).map(x => {
             return {x: x.day, y: x.views}
          })
        }
      )
      clonesChart.data.datasets.push(
        {
          label: key,
          backgroundColor: colors[idx],
          borderColor: colors[idx],
          fill: false,
          data: results[key].data.filter(x => x.clones > 0).map(x => {
            return {x: x.day, y: x.clones}
          })
        }
      )
    })
    visitChart.update();
    clonesChart.update();
  })

</script>
