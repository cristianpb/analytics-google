<p>
  Popular content:
</p>

<canvas id="tags-chart"></canvas>

<script>
  import { data as dataCsv, results } from '../tools/stores';
  import { fetchJekyll } from '../tools/getData.js';
  import { onMount } from 'svelte';
  import Chart from "chart.js";

  let jekyll
  let tagsChart

  onMount(async () => {
    jekyll = await fetchJekyll()

    const ctx = document.getElementById("tags-chart").getContext("2d");
    tagsChart = new Chart(ctx, {
      type: "bubble",
      data: {
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
          callbacks: {
            title: function(tooltipItems, data) {
              let { index } = tooltipItems[0]
              let { datasetIndex } = tooltipItems[0]
              let count = data.datasets[datasetIndex].data[index].x;
              let visits = data.datasets[datasetIndex].data[index].y;
              let tag = data.datasets[datasetIndex].data[index].tag;
              return `Visits: ${visits}, Posts: ${count}`
            },
            label: function(tooltipItems, data) {
              let { index } = tooltipItems
              let { datasetIndex } = tooltipItems
              let tag = data.datasets[datasetIndex].data[index].tag;
              return `${tag}`
            }
          }
        },
        scales: {
          xAxes: [{
            id: 'posts-x-axis',
            type: 'linear',
            scaleLabel: {
              display: true,
              labelString: 'Number of posts'
            }
          }],
          yAxes: [{
            id: 'visits-y-axis',
            type: 'logarithmic',
            ticks: {
							userCallback: function(tick) {
								var remain = tick / (Math.pow(10, Math.floor(Chart.helpers.log10(tick))));
                console.log(remain)
								if (remain === 1 || remain === 2 || remain === 5) {
									return tick.toString();
								}
								return '';
							},
						},
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: 'Number of visits'
            }
          }]
        },
      }
    });

  })

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

      let tagsUnsorted = jekyll.reduce((total, s) => {
        if (!s.link) {
        s.tags.forEach(tag => {
          if (tag in total) {
            total[tag].count += 1;
            total[tag].visits += pagesUnsorted[s.url] ? pagesUnsorted[s.url] : 0;
          } else {
            total[tag] = {
              tag,
              count: 1,
              visits: pagesUnsorted[s.url] ? pagesUnsorted[s.url] : 0
            };
          }
        })
        }
        return total
      }, {})
      renderChart(Object.values(tagsUnsorted))
    }
  })

  function renderChart(data) {
    tagsChart.data.datasets[0].data = data.map(item => {
      return {x: item.count, y: item.visits, tag: item.tag, r: Math.log((item.visits / item.count * 10) + 1)}
    })
    tagsChart.update();
  }



</script>
