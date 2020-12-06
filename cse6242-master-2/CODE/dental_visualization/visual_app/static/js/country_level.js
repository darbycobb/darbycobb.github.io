
// Define body
var body = d3.select("body");

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");


// Define the div for the tooltip
var tooltip = body.append("div")
  .attr("class", "tooltip")
  .attr("id", "tooltip")
  .style("opacity", 0);

var unemployment = d3.map();

var path = d3.geoPath();

var x = d3.scaleLinear()
    .domain([2.6, 75.1])
    .rangeRound([600, 860]);



const summary_stats = "../county_summary.json"
const counties = '../All_States/us-counties.json'
d3.queue()
    .defer(d3.json, counties)
    .defer(d3.json, summary_stats)
    .await(ready);

// List of groups
var allGroup = ["Dentist", "Hygenist"]

// add the options to the button
d3.select("#selectButton")
  .selectAll('myOptions')
  .data(allGroup)
  .enter()
  .append('option')
  .text(function (d) { return d; }) // text showed in the menu
  .attr("value", function (d) { return d; }) // corresponding value returned by the button


function ready(error, us, county_summaries) {
  if (error) throw error;


  var color = d3.scaleSequential(
    [
        d3.min(county_summaries, function(d) {return d.NUM_DENTISTS}),
        d3.max(county_summaries, function(d) {return d.NUM_DENTISTS})],
        d3.interpolateReds);
    var x1 = d3.scaleLinear()
        .domain([min,max])         
        .range([0, height/3]) 
  var defs = svg.append("defs");
  var linearGradient = defs.append("linearGradient")
    .attr("id", "linear-gradient");

  linearGradient
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%");

  for (i = 0; i < 20; i++){
    var col = d3.interpolateReds(i/20)
    linearGradient.append("stop")
      .attr("offset", i*5 + "%")
      .attr("stop-color", col); //light blue
  }

  svg.append("rect")
    .attr("width", 20)
    .attr("height", height/3)
    .attr("transform", "translate(60," + h/4 + ")") 
    .style("fill", "url(#linear-gradient)");

  svg.append("text")
    .attr('id', 'legend_label')
    .attr("text-anchor", "middle")
    .attr("y", h/4- 15)
    .attr("x", 65)
    .text('total dentists')

  svg.append("g")
      .attr("class", "counties")
      .selectAll("path")
      .data(topojson.feature(us, us.objects.counties).features)
      .enter().append("path")
      .attr("class", "county")
      .attr("data-fips", function(d) {
        return d.id
       })
      .attr("fill", function(d) {
        var result = county_summaries.filter(function( obj ) {
            // Put state and county code together
            fips = obj.STATE_FIPS * 1000 + obj.COUNTY_FIPS
            return fips == d.id;
        })
        if (result[0])
        {
            console.log("RESULT 0", result[0].NUM_DENTISTS)
            console.log("COLOR", color(result[0].NUM_DENTISTS))
            return color(result[0].NUM_DENTISTS)
        }
        else
        {
            return "#f3f3f3"
        }
        })
      .attr("d", path)
      .on("mouseover", function(d) {  
        document.body.style.cursor = "pointer";    
        tooltip.style("opacity", .9); 
        tooltip.html(function() {
          var result = county_summaries.filter(function( obj ) {
              // Put state and county code together
              fips = obj.STATE_FIPS * 1000 + obj.COUNTY_FIPS
            return fips == d.id;
          });
          console.log("RESULT: ", result)
          if(result[0]){
            return '<b><span style="line-height:2">' + 'county_name' + ', ' + 'state' + '</span></b>' + 
            '<br>Number of Dentists: ' + Math.round(result[0].NUM_DENTISTS) +  
            '<br>Summary Statistic 2: ' + 12 + 
            '<br>Summary Statistic 3: ' + 12
          }
          //could not find a matching fips id in the data
          return 0
        })
          .style("left", (d3.event.pageX + 10) + "px") 
          .style("top", (d3.event.pageY - 28) + "px"); }) 
          .on("click", function(d){
              console.log(d.id.substring(0, 2))
              var queryString = "?selected=" + d.id.substring(0, 2); 
              window.open('../templates/state6.html' + queryString, '_blank');
            })
          .on("mouseout", function(d) { 
            document.body.style.cursor = "default"; 
            tooltip.style("opacity", 0); 
          });

  svg.append("path")
      .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
      .attr("class", "states")
      .attr("d", path);

}

function create_legend() {


}