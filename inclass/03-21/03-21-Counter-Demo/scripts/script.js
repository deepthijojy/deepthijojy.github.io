const width = document.querySelector("#cntr").clientWidth;

// limit of Count
const LIMIT = 10;

const counter = [1];

const svg = d3.select("#cntr")
    .append("svg")
    .attr("width", width)
    .attr("height", 40);

function dataJoin(data) {
    
    // Visualization specification.
    // Notice in the following that style (e.g., opacity) and text are now data-driven

    const g = svg.selectAll("g")
        .data(data)
        .join("g")
            .attr("transform", "translate(" + width/2 + ", 20)")
            // Multiply opacity by 0.1, so that after 10 'clicks' you reach 1.0 opacity (i.e., 100%)
            .style("opacity", function(d) {return d * 0.1});
    
    const circle = g.append("circle")
        .attr("r", 20)
        .style("fill", "steelblue"); 
    
    const label = g.append("text")
        .style("fill", "white")
        .style("font", "bold 1.2em sans-serif")
        .style("text-anchor", "middle")
        .attr("dy", "0.3em")

        // The text to display is simply the number of the datum inside the `counter` array
        // This is JavaScript convention for anonymous functions
        .text((d, i) => d);
    
    // Event callbacks.

    // We implement the following events in a way that they just alter the underlying
    // data not directly the appearance of SVG elements. Instead, appearance is
    // specified above under "visualization specification".

    g.on("click", function(event, d) {
        // TO DO
        // this is increasing the content of array by one
        // Math.min: 
            // rwturn the minimum between d = d+1 and 10

        counter[0] = Math.min(++d, LIMIT);
        return dataJoin(counter);
    });

    g.on("dblclick", function(event, d) {
        // TO DO
        counter[0] = 1;
        return dataJoin(counter);
    });

}

// calling the function of the counter
dataJoin(counter);