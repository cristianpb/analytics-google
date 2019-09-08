$.getJSON("/data", function(data) {
  console.log(data.length);
  console.log(data);
  //Create a Crossfilter instance
  var ndx = crossfilter(data);

  // parse date
  var dateFormat = d3.time.format("%Y%m%d");
  data.forEach(function(d) {
		d["date"] = dateFormat.parse(d["date"]);
	});

  //Define Dimensions
  var countryDim = ndx.dimension(function(d) { return d["country"]; });
  var countryCodeDim = ndx.dimension(function(d) { return d["countryIsoCode"]; });
  var dateDim = ndx.dimension(function(d) { return d["date"]; });
  var deviceDim = ndx.dimension(function(d) { return d["device"]; });
  var sourceDim = ndx.dimension(function(d) { return d["source"]; });
  //var cityDim = ndx.dimension(function(d) { return d["city"]; });
  //var dayDim = ndx.dimension(function(d) { return d["day"]; });
  //var monthDim = ndx.dimension(function(d) { return d["month"]; });
  var allDim = ndx.dimension(function(d) {return d;});

  //Group Data
  var countryGroup = countryDim.group().reduceSum(function (d) {
    return d["sessions"];
  });
  var dateGroup = dateDim.group().reduceSum(function (d) {
    return d["sessions"];
  });
  var deviceGroup = deviceDim.group().reduceSum(function (d) {
    return d["sessions"];
  });
  var sourceGroup = sourceDim.group().reduceSum(function (d) {
    return d["sessions"];
  });
  //var cityGroup = cityDim.group();
  //var dayGroup = dayDim.group();
  //var monthGroup = monthDim.group();
  var all = ndx.groupAll();

  //Define values (to be used in charts)
	var minDate = dateDim.bottom(1)[0]["date"];
	var maxDate = dateDim.top(1)[0]["date"];

  //Charts
  var countryChart = dc.rowChart("#country-chart");
  var timeChart = dc.barChart("#time-chart");
  var deviceChart = dc.pieChart("#device-chart");
  var sourceChart = dc.rowChart("#source-chart");
  var numberRecordsND = dc.numberDisplay("#number-records-nd");

  numberRecordsND
    .formatNumber(d3.format("d"))
    .valueAccessor(function(d){return d; })
    .group(all);

  countryChart
    .width(300)
    .height(800)        
    .margins({top: 10, right: 50, bottom: 30, left: 40})
    .dimension(countryDim)
    .group(countryGroup)
    .ordering(function(d) { return -d.value })
    .elasticX(true);

  timeChart
    .width(400)
    .height(150)
    .dimension(dateDim)
    .group(dateGroup)
    .transitionDuration(500)
    .x(d3.time.scale().domain([minDate, maxDate]))
    .xUnits(function(){return 10;})
    .elasticY(true)
    .xAxis()
    .tickFormat(d3.time.format('%d')).ticks(7);


  deviceChart
    .width(300)
    .height(300)
    .innerRadius(100)
    .dimension(deviceDim)
    .group(deviceGroup);

  sourceChart
    .width(300)
    .height(800)        
    .margins({top: 10, right: 50, bottom: 30, left: 40})
    .dimension(sourceDim)
    .group(sourceGroup)
    .ordering(function(d) { return -d.value })
    .elasticX(true);

  //countryChart
  //  .width(300)
  //  .height(100)
  //  .dimension(countryDim)
  //  .group(countryGroup)
  //  .transitionDuration(500)
  //  .elasticY(true);

  //cityChart
  //  .width(300)
  //  .height(100)
  //  .dimension(countryDim)
  //  .group(countryGroup)
  //  .transitionDuration(500)
  //  .elasticY(true)
  //  .yAxis().ticks(4);

  //dayChart
  //  .width(300)
  //  .height(100)
  //  .dimension(countryDim)
  //  .group(countryGroup)
  //  .transitionDuration(500)
  //  .elasticY(true)
  //  .yAxis().ticks(4);

  //monthChart
  //  .width(300)
  //  .height(100)
  //  .dimension(countryDim)
  //  .group(countryGroup)
  //  .transitionDuration(500)
  //  .elasticY(true)
  //  .yAxis().ticks(4);

  // Define map
  var map = L.map('map');
  var drawMap = function(){

    map.setView([37, 2.8], 1);
    mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
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
    $.getJSON("./static/geo/output.json", function(countries_json) {
      console.log(countries_json.features);
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
	dcCharts = [countryChart];

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
