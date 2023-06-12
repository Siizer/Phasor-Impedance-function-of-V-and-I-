

export function Inputs (SelectInputFieldsID,classForTable,SelectInputFieldsClass,data,onInputChanged){

    const inputDiv = d3.select(SelectInputFieldsID);
    const table = inputDiv.append("table").attr("class",classForTable);
    table.style('max-width', '100%');
    // Create table header
    const header = table.append("thead").append("tr");
    // Create a button in the first header cell
    header.append("th")
    .append("button")
    .text("R/X")
    .attr("class", "myButtonCurrentAndVoltagePanel") // optional: add a class for styling
    .on("click", function() {
        
        // code for button click event to switch to 0 1 2...
    });
    header.append("th").text("R");
    header.append("th").text("X");
    
    // Create table body
    const tbody = table.append("tbody");
    
    const inputFields = tbody.selectAll("."+SelectInputFieldsClass)
      .data(data)
      .enter().append("tr")
      .attr("class", SelectInputFieldsClass)
    
    // Add first column with input file labels
    inputFields.append("td")
      .text(d => `${d.key}: `)
      .attr("class",d => d.key.charAt(0));
    
    // Add second column with real input fields
    inputFields.append("td")
      .append("input")
      .style("width", "50px")
      .attr("type", "number")
      .attr("step", "0.01")
      .attr("value", d => d.value.x)
      .attr("placeholder", "x")
      .attr("id", d => `${d.key}-real`)
      .attr("class",d => d.key.charAt(0))
      .on("input", onInputChanged);
    
    // Add third column with imaginary input fields
    inputFields.append("td")
      .append("input")
      .style("width", "50px")
      .attr("type", "number")
      .attr("step", "0.01")
      .attr("value", d => d.value.y)
      .attr("placeholder", "y")
      .attr("id", d => `${d.key}-imaginary`)
      .attr("class",d => d.key.charAt(0))
      .on("input", onInputChanged);

    return inputDiv;
}