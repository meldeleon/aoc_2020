const imported = require("fs").readFileSync("day11.txt").toString().split("\n");
const input = imported.map((x) => {
  return x.split("");
});

//console.table(input);

//check if a seat is empty

function checkEmpty(x, y, map) {
  if (
    map[x] === undefined ||
    map[x][y] === "L" ||
    map[x][y] === "." ||
    map[x][y] === undefined
  ) {
    return true;
  } else {
    return false;
  }
}

//check if a seat is full
function checkFull(x, y, map) {
  if (map[x][y] === "#") {
    return true;
  } else {
    return false;
  }
}

//change seat logic
function seatChange(x, y, map) {
  let emptySeats = 0;
  let fullSeats = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      checkX = x + i;
      checkY = y + j;
      //console.log(`input ${checkX}, ${checkY} :`);
      if (checkX === x && checkY === y) {
      } else if (checkEmpty(checkX, checkY, map)) {
        emptySeats++;
      } else {
        fullSeats++;
      }
    }
  }
  /*console.log(
    `${x}, ${y} has empty seats: ${emptySeats}, full seats: ${fullSeats}`
  );*/
  if (map[x][y] === "L" && emptySeats === 8) {
    return "#";
  } else if (map[x][y] === "#" && fullSeats >= 4) {
    return "L";
  } else {
    return map[x][y];
  }
}

// one iteration
function loop(area) {
  let result = [];
  for (let z = 0; z < area.length; z++) {
    let newRow = [];
    for (let a = 0; a < area[z].length; a++) {
      let newSeat = seatChange(z, a, area);
      newRow.push(newSeat);
    }
    result.push(newRow);
  }

  return result;
}

function countFull(area) {
  let fullSeats = 0;
  area.forEach((row) => {
    row.forEach((seat) => {
      if (seat === "#") {
        fullSeats++;
      }
    });
  });
  //console.log("full seats: " + fullSeats);
  return parseInt(fullSeats);
}
//first loop
let result = loop(input);
//console.log(countFull(result));

let changeArray = [];
let difference = 1;
while (difference !== 0) {
  result = loop(result);
  let fullSeats = countFull(result);
  changeArray.push(fullSeats);
  if (changeArray.length >= 2) {
    difference =
      parseInt(changeArray[changeArray.length - 1]) -
      parseInt(changeArray[changeArray.length - 2]);
  }
  console.log(changeArray);
  console.log(`difference is ${difference}`);
}
