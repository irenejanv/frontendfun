function treechart() {
  // set the dimensions and margins of the graph
  var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 445 - margin.left - margin.right,
    height = 445 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3
    .select('#treechart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  d3.csv('./data/population.csv', function (data) {});
}
