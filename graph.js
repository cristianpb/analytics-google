dc.config.defaultColors(d3.schemeCategory10);

function remove_empty_bins(source_group) {
    function non_zero_pred(d) {
        //return Math.abs(d.value) > 0.00001; // if using floating-point numbers
        return d.value !== 0; // if integers only
    }
    return {
        all: function () {
            return source_group.all().filter(non_zero_pred);
        },
        top: function(n) {
            return source_group.top(Infinity)
                .filter(non_zero_pred)
                .slice(0, n);
        }
    };
}

d3.csv("data.csv").then(function(data) {
  console.log(data.length);
  //Create a Crossfilter instance
  var ndx = crossfilter(data);

  // parse date
  var dateFormatParser = d3.timeParse("%Y%m%d");
  data.forEach(function(d) {
		d.dd = dateFormatParser(d.date);
	});

  //Define Dimensions
  var countryDim = ndx.dimension(function(d) { return d["country"]; });
  var dateDim = ndx.dimension(function(d) { return d.dd; });
  var deviceDim = ndx.dimension(function(d) { return d["device"]; });
  var sourceDim = ndx.dimension(function(d) { return d["source"]; });
  var pageDim = ndx.dimension(function(d) { return d["pagePath"]; });
  var allDim = ndx.dimension(function(d) {return d;});

  //Group Data
  var countryGroup = countryDim.group().reduceSum(function (d) {
    return d["sessions"];
  });
  var filter_countryGroup = remove_empty_bins(countryGroup);
  var dateGroup = dateDim.group().reduceSum(function (d) {
    return d["sessions"];
  });
  var deviceGroup = deviceDim.group().reduceSum(function (d) {
    return d["sessions"];
  });
  var sourceGroup = sourceDim.group().reduceSum(function (d) {
    return d["sessions"];
  });
  var filter_sourceGroup = remove_empty_bins(sourceGroup);
  var pageGroup = pageDim.group().reduceSum(function (d) {
    return d["sessions"];
  });
  var filter_pageGroup = remove_empty_bins(pageGroup);

  var all = ndx.groupAll();

  //Define values (to be used in charts)
	var minDate = dateDim.bottom(1)[0].dd;
	var maxDate = dateDim.top(1)[0].dd;
  var monthFormat = d3.timeFormat("%B");
	var month = monthFormat(dateDim.top(1)[0].dd);

  //Charts
  var countryChart = dc.rowChart("#country-chart");
  var timeChart = dc.barChart("#time-chart");
  var deviceChart = dc.pieChart("#device-chart");
  var sourceChart = dc.rowChart("#source-chart");
  var pageChart = dc.rowChart("#page-chart");
  var dataTable = dc.dataTable("#data-table");
  var numberRecordsND = dc.numberDisplay("#number-records-nd");

  numberRecordsND
    .formatNumber(d3.format("d"))
    .valueAccessor(function(d){return d; })
    .group(all);

  countryChart
    .width(300)
    .height(400)        
    .margins({top: 10, right: 50, bottom: 30, left: 40})
    .dimension(countryDim)
    .group(filter_countryGroup)
    .cap(10)
    .ordering(function(d) { return -d.value })
    .elasticX(true);

  timeChart
    .width(400)
    .height(400)
    //.chart(function(c) { return dc.lineChart(c).curve(d3.curveLinear).renderArea(false); })
    // https://github.com/d3/d3-shape/blob/master/README.md#curves
    .x(d3.scaleTime().domain([minDate,maxDate]))
    .xUnits(function(){return 10;})
    .brushOn(true)
    .yAxisLabel("Nombre de visites")
    .xAxisLabel(month)
    .clipPadding(10)
    //.elasticY(true)
    .dimension(dateDim)
    .group(dateGroup);
    //.mouseZoomable(true)
    //.seriesAccessor(function(d) {return "One";})
    //.keyAccessor(function(d) {return +d.key;})
    //.valueAccessor(function(d) {return +d.value;});
  timeChart
    .xAxis()
    .tickFormat(d3.timeFormat('%d')).ticks(7);

  deviceChart
    .width(300)
    .height(300)
    .innerRadius(100)
    .dimension(deviceDim)
    .group(deviceGroup);

  sourceChart
    .width(300)
    .height(400)
    //.margins({top: 10, right: 50, bottom: 30, left: 40})
    .dimension(sourceDim)
    .group(filter_sourceGroup)
    .cap(10)
    .ordering(function(d) { return -d.value })
    .elasticX(true);

  pageChart
    .width(300)
    .height(400)        
    .margins({top: 10, right: 50, bottom: 30, left: 40})
    .dimension(pageDim)
    .group(filter_pageGroup)
    .cap(10)
    .ordering(function(d) { return -d.value })
    .elasticX(true);

  dataTable
    .width(768)
    .height(480)
    .dimension(countryDim)
    .showSections(false)
    .columns(['date', 'country', 'city', 'pagePath', 'device', 'source', 'sessions'])
    .order(d3.descending);

  // Define map
  var map = L.map('map');
  var drawMap = function(){

    map.setView([37, 2.8], 1);
    mapLink = '<a href="https://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 15,
      }).addTo(map);

    // Colors ticks depending on density
    function getColor(d) {
      return d > 1000 ? '#800026' :
        d > 500  ? '#BD0026' :
        d > 200  ? '#E31A1C' :
        d > 100  ? '#FC4E2A' :
        d > 50   ? '#FD8D3C' :
        d > 20   ? '#FEB24C' :
        d > 10   ? '#FED976' :
        '#FFEDA0';
    }

    // Define color using getColor
    function style(feature) {
      return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
      };
    }

    // Read geojson and color regions using density
    d3.json("static/countries.geo.json").then(function(countries_json, error) {
      countries_json.features.forEach((obj) => {
        obj.properties.density = 0
        allDim.top(Infinity).forEach((d) => {
          if (d['countryIsoCode'] == obj.id) {
            obj.properties.density += d['sessions'];
          }
        });
      });
      L.geoJson(countries_json, {style: style}).addTo(map);
    });

  }

	//Draw Map
	drawMap();

	//Update the heatmap if any dc chart get filtered
	dcCharts = [countryChart, timeChart, sourceChart, deviceChart, pageChart];

	dcCharts.forEach((dcChart) => {
    dcChart.on("filtered", function (chart, filter) {
      map.eachLayer(function (layer) {
        map.removeLayer(layer)
      });
      drawMap();
    });
  });

  dc.renderAll();
})
