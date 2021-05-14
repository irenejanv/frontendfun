function income_degrees() {
  // set the dimensions and margins of the graph
  var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 800 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3
    .select('#income_degrees')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  svg
    .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', width)
    .attr('height', height)
    .attr('fill', '#f6f0e0');

  //Read the data
  d3.csv('./Income Scatterplot/income.csv', function (data) {
    // Add X axis
    var x = d3.scaleLinear().domain([0, 80]).range([0, width]);

    //Create circle color const

    svg
      .append('g')
      .attr('class', 'xAxis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x).tickSize(-height));

    // Add Y axis
    var y = d3.scaleLinear().domain([0, 110]).range([height, 0]).nice();

    svg.append('g').call(d3.axisLeft(y).tickSize(-width));

    svg.selectAll('line').attr('stroke', 'white');
    svg.selectAll('path.domain').attr('stroke', 'white');
    const xAxis = svg.selectAll('.xAxis');
    const xAxisText = xAxis.selectAll('text');
    xAxisText.attr('dy','15px');

    // get rid of extra 0 on y axis <text fill="#000" x="-3" dy="0.32em">0</text>

    // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
    // Its opacity is set to 0: we don't see it by default.
    var tooltip = d3
      .select('#income_degrees')
      .append('div')
      .style('opacity', 0)
      .attr('class', 'tooltip')
      .style('background-color', '#69b3a2')
      // why does this not change the color
      .style('border', 'none')
      .style('border-width', '1px')
      .style('border-radius', '5px')
      .style('padding', '10px')
      .style('font-family', 'sans-serif')
      .style('font-size', '12px')
      .style('color', 'white');

    // A function that change this tooltip when the user hover a point.
    // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
    var mouseover = function (d) {
      tooltip.style('opacity', 0.9);
    };

    var mousemove = function (d) {
      tooltip
        .html(
          d.Ethnicity +
            //'<span class="tooltip_ethnicity">' + d.Ethnicity to edit individual words and make them bold etc.
            '<br> ' +
            ' Bachelor Degree: ' +
            d.PercentDegree +
            '%' +
            '<br> Average Household Income: ' +
            d.Income +
            'k a year'
        )
        .style('left', d3.mouse(this)[0] + 90 + 'px') // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
        .style('top', d3.mouse(this)[1] + 'px');
    };

    // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
    var mouseleave = function (d) {
      tooltip.transition().duration(200).style('opacity', 0);
    };

    // Add dots

    const dots = svg.append('g').selectAll('dot').data(data).enter();

    dots
      .append('circle')
      .attr('cx', function (d) {
        return x(d.PercentDegree);
      })
      .attr('cy', function (d) {
        return y(d.Income);
      })
      .attr('r', 7)

      //try to change color of some dots
      .attr('fill', function (d) {
        let color;
        if (
          d.Ethnicity === 'White' ||
          d.Ethnicity === 'Black' ||
          d.Ethnicity === 'Asian Average' ||
          d.Ethnicity === 'U.S. Average' ||
          d.Ethnicity === 'Hispanic'
        ) {
          color = '#e24935';
        } else {
          color = '#69b3a2';
        }
        return color;
      })

      // .style('fill', '#69b3a2')
      .style('opacity', 0.9)
      .style('stroke', 'white')
      .on('mouseover', mouseover)
      .on('mousemove', mousemove)
      .on('mouseleave', mouseleave);

    dots
      .append('text')
      .attr('x', function (d) {
        return x(d.PercentDegree);
      })
      .attr('y', function (d) {
        return y(d.Income) - 10;
      })
      .text(function (d) {
        if (
          d.Ethnicity === 'White' ||
          d.Ethnicity === 'Black' ||
          d.Ethnicity === 'Indian' ||
          d.Ethnicity === 'Asian Average' ||
          d.Ethnicity === 'U.S. Average' ||
          d.Ethnicity === 'Hispanic' ||
          d.Ethnicity === 'Bhutanese' ||
          d.Ethnicity === 'Nepali' ||
          d.Ethnicity === 'Cambodian' ||
          d.Ethnicity === 'Mongolian' ||
          d.Ethnicity === 'Korean'
        ) {
          return d.Ethnicity;
        }
        if (d.Ethnicity === 'Bhutanese') {
          return d.Ethnicity + ' ' + d.PercentDegree + '%, ' + d.Income + 'K';
        } else {
          return '';
        }
        //
      })

      .attr('text-anchor', 'middle')
      .attr('font-family', 'sans-serif')
      .style('font-size', '12px')
      .style('color', 'red');
  });
}
income_degrees();
