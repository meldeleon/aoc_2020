const imported = require("fs").readFileSync("day11.txt").toString().split("\n");
const input = imported.map((x) => {
  return x.split("");
});

//console.table(input);

//check if aisle

function checkAisle(x, y, map) {
  if (map[x][y] === ".") {
    return true;
  } else {
    return false;
  }
}
console.log(checkAisle(0, 1, input));

//check if a seat is empty
function checkEmpty(x, y, map) {
  if (map[x] === undefined || map[x][y] === "L" || map[x][y] === undefined) {
    return true;
  } else {
    return false;
  }
}

function checkOutOfBounds(x, y, map) {
  if (map[x] === undefined || map[x][y] === undefined) {
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

seatChange;
//change seat logic
function seatChange(x, y, map) {
  let emptySeats = 0;
  let fullSeats = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      checkX = x + i;
      checkY = y + j;
      let loop = 1;
      //console.log(`input ${checkX}, ${checkY} :`);
      //if current seat, do nothing
      if (checkX === x && checkY === y) {
      }
      // if seat is empty, increase empty seat count
      if (
        checkEmpty(checkX, checkY, map) ||
        checkOutOfBounds(checkX, checkY, map)
      ) {
        emptySeats++;
      } else if (checkAisle(checkX, checkY, map)) {
        outerX = checkX + x * loop;
        outerY = checkY + y * loop;
        console.log(`outer x: ${outerX}, outer y: ${outerY}`);
        while (true) {
          if (checkOutOfBounds(outerX, outerY, map)) {
            console.log(`outerx/y is out of bands`);
            emptySeats++;
            break;
          } else if (checkEmpty(outerX, outerX, map)) {
            console.log(`outerx/y is empty`);
            emptySeats++;
            break;
          } else if (checkFull(outerX, outerY, map)) {
            console.log(`outerx/y is full`);
            fullSeats++;
            break;
          } else if (checkAisle(outerX, outerY, map)) {
            loop++;
            outerX = checkX + x * loop;
            outerY = checkY + y * loop;
            console.log(`outerx/y is aisle`);
          } else {
            break;
          }
        }
      }
    }
  }

  console.log(
    `${x}, ${y} has empty seats: ${emptySeats}, full seats: ${fullSeats}`
  );
  if (map[x][y] === "L" && emptySeats === 8) {
    return "#";
  } else if (map[x][y] === "#" && fullSeats >= 5) {
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
console.table(result);

/*
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
*/
