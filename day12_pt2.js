const input = require("fs").readFileSync("day12.txt").toString().split("\n");

//store directions as index
const cardinalDirections = ["N", "E", "S", "W"];

//create move log
const moves = [];

// create ship as object, properties as state
let ship = [0, 0];
let waypoint = [10, 1];

function rotateRight(location) {
  let update = [];
  update.push(location[1]);
  update.push(location[0] * -1);
  return update;
}

function rotateLeft(locaton) {
  let update = [];
  update.push(location[1] * -1);
  update.push(location[0]);
  return update;
}

//move the ship to the waypoint
function moveToWaypoint(times) {
  console.log(waypoint);
  let xDistance = waypoint[0];
  let yDistance = waypoint[1];
  ship[0] += times * xDistance;
  ship[1] += times * yDistance;
}

function moveWaypoint(direction, distance) {
  switch (direction) {
    case "N":
      waypoint[1] += distance;
      break;
    case "E":
      waypoint[0] += distance;
      break;
    case "S":
      waypoint[1] -= distance;
      break;
    case "W":
      waypoint[0] -= distance;
  }
}

function executeCommand(command, ship, waypoint) {
  let prefix = command.match(/^[A-Z]/).toString();
  let distance = parseInt(command.match(/[0-9].*/));
  console.log(prefix, distance);
  if (prefix === "N" || prefix === "E" || prefix === "S" || prefix === "W") {
    moveWaypoint(prefix, distance);
  } else if (prefix === "R") {
    let turns = distance / 90;
    let result = waypoint;
    for (i = 1; i <= turns; i++) {
      result = rotateRight(result);
    }
    waypoint = result;
  } else if (prefix === "L") {
    let turns = distance / 90;
    let result = waypoint;
    for (i = 1; i <= turns; i++) {
      result = rotateLeft(result);
    }
    waypoint = result;
  } else if (prefix === "F") {
    moveToWaypoint(distance);
  } else {
    console.log("invalid command");
  }
  console.log("waypoint postion:" + waypoint);
  console.log("ship postion:" + ship);
}

input.forEach((command) => {
  executeCommand(command, ship, waypoint);
});

let solution = ship[0] + ship[1];

console.log(solution);
console.table(ship);
