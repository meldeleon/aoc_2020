const input = require("fs").readFileSync("day13.txt").toString().split("\n");
let arrival = parseInt(input[0]);
let schedule = input[1].split(",");
let departures = [];

schedule.forEach((x) => {
  if (x === "x") {
    console.log("out of service");
  } else {
    console.log(arrival % x);
    let departure = {
      id: x,
      time: parseInt(x - (arrival % x) + arrival),
    };
    departures.push(departure);
  }
});

departures.sort(function (a, b) {
  return a.time - b.time;
});
console.log(departures);

let solution = (departures[0].time - arrival) * departures[0].id;
console.log(solution);
