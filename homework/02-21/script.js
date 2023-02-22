function parseLOG(d) {

    console.log(d);

}

// load the csv file and print its contents
// d3.csv("/homework/02-21/dataset/Remote work2021.csv").then(parseLOG);

d3.csv("/homework/02-21/dataset/Remote work2021.csv").then(function(data) {

    console.log(data);

    let filtered_data = data.filter(function(d) {

            return d.Industry === "Other Services";
    
        })
    
        console.log(filtered_data);

        

    let grouped_data = d3.group(data, function(d) {

        return d.Industry;
 
     });

});