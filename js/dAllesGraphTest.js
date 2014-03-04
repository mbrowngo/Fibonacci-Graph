var fib = []; 
var screenWidth = window.innerWidth - 100;

/* generates a fibonacci sequence of end+1 elements. 
*  Start is 1 or 0. Traditionally a fibonacci sequence starts with 1, but modern applicaions
*  start at 0 so you can set it either way from the function call. */
function generateFibonacci(start,end){ 
	fib[0] = start;
	fib[1] = 1;
	for(var i = 2; i<=end; i++)
	{
	    fib[i] = fib[i-2] + fib[i-1];
	}
}

generateFibonacci(1,49);

var width = screenWidth,
    barHeight = 20;

var x = d3.scale.linear()
    .domain([0, d3.max(fib)])
    .range([0, width-100]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", barHeight * fib.length);

var bar = chart.selectAll("g")
    .data(fib)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1);

bar.append("text")
    .attr("x", function(d) { return x(d) + 70; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });