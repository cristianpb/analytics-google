$.getJSON("/data", function(data) {
  console.log(data);
  //Create a Crossfilter instance
  var ndx = crossfilter(data);

  //Define Dimensions
  var countryDim = ndx.dimension(function(d) { return d["country"]; });
  //var cityDim = ndx.dimension(function(d) { return d["city"]; });
  //var dayDim = ndx.dimension(function(d) { return d["day"]; });
  //var monthDim = ndx.dimension(function(d) { return d["month"]; });
  var allDim = ndx.dimension(function(d) {return d;});

  console.log("COuntry dim", countryDim);

  //Group Data
  var countryGroup = countryDim.group();
  //var cityGroup = cityDim.group();
  //var dayGroup = dayDim.group();
  //var monthGroup = monthDim.group();
  var all = ndx.groupAll();

  //Charts
  var countryChart = dc.rowChart("#country-chart");
  //var cityChart = dc.barChart("#city-chart");
  //var dayChart = dc.barChart("#day-chart");
  //var monthChart = dc.barChart("#month-chart");
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

  dc.renderAll();
})
