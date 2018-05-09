// d3.selectAll("li").style("background-color", "tomato");
// d3
//   .select("li:nth-child(3n")
//   .style("background-color", "darkblue")
//   .style("color", "white");

// d3
//   .selectAll("li:nth-child(even)")
//   .html("I'm an even bullet point!")
//   .classed("big", true);

const numArray = [12, 20, 33, 40, 55, 60, 75, 80, 93];

// d3
//   .selectAll(".items li")
//   .data(numArray)
//   .text(d => `This is item ${d}`);

// d3
//   .selectAll(".items li")
//   .data(numArray)
//   .style("font-size", d => `${d}px`);

const name = "Inigo Montoya";
d3.select(".name").text(name);
const styles = [
  {
    background: "red",
    color: "white",
    width: "35"
  },
  {
    background: "yellow",
    color: "black",
    width: "25"
  },
  {
    background: "darkblue",
    color: "white",
    width: "20"
  },
  {
    background: "orange",
    color: "black",
    width: "8"
  },
  {
    background: "green",
    color: "white",
    width: "12"
  }
];

d3
  .selectAll(".phones li")
  .data(styles)
  .style({
    background: d => d.background,
    color: d => d.color,
    width: d => `${d.width}%`
  });
// const li = d3
//   .select("ul")
//   .selectAll("items li")
//   .data(numArray)
//   .text(d => `This is item ${d}`);

// li
//   .enter()
//   .append("li")
//   .text(d => `This is item ${d}`);

// li.exit().remove();
