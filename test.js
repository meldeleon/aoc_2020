let waypoint = [3, 2];

function rotateRight(location) {
  let update = [];
  update.push(location[1]);
  update.push(location[0] * -1);
  return update;
}

let degrees = 270;
let turns = degrees / 90;
let result = waypoint;
for (i = 1; i <= turns; i++) {
  result = rotateRight(result);
}
waypoint = result;

console.log(waypoint);
