const imported = require("fs").readFileSync("day11.txt").toString().split("\n");
const input = imported.map((x) => {
  return x.split("");
});

//console.table(input);

//check if a seat is aisle

function checkAisle(x, y, map) {
  if (map[x][y] === ".") {
    return true;
  } else {
    return false;
  }
}

//check if a seat is empty
function checkEmpty(x, y, map) {
  if (map[x][y] === "L") {
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

//change seat logic
function seatChange(x, y, map) {
  //initiate counters
  let emptySeats = 0;
  let fullSeats = 0;

  //loop one, checking all the x values surrounding the seat
  for (let i = -1; i <= 1; i++) {
    //loop two, checking all the y values at specific x values surrounding the seat
    for (let j = -1; j <= 1; j++) {
      checkX = x + i;
      checkY = y + j;
      let loop = 1;
      //if current seat, do nothing
      if (checkX === x && checkY === y) {
      }
      // if seat is empty, increase empty seat count
      else if (
        checkOutOfBounds(checkX, checkY, map) ||
        checkEmpty(checkX, checkY, map)
      ) {
        emptySeats++;
      }
      // if seat is full
      else if (checkFull(checkX, checkY, map)) {
        fullSeats++;
      }
      //if seat is aisle
      else if (checkAisle(checkX, checkY, map)) {
        console.log(`${checkX},${checkY} is an aisle, triggering a loop`);
        let outerX = checkX + i;
        let outerY = checkY + j;

        while (true) {
          console.log(`outer x: ${outerX}, outer y: ${outerY}`);
          // if the outer seat is out of bounds, increase empty seat count, break.
          if (checkOutOfBounds(outerX, outerY, map)) {
            console.log(`${outerX}, ${outerY} outer x/y is out of bounds`);
            emptySeats++;
            break;
            // f the outer seat is empty, increase empty seat count, break
          } else if (checkEmpty(outerX, outerY, map)) {
            console.log(`${outerX}, ${outerY} outer x/y is empty`);
            emptySeats++;
            break;
          } else if (checkFull(outerX, outerY, map)) {
            console.log(`${outerX}, ${outerY} outer x/y is full`);
            fullSeats++;
            break;
          }
          //if it is and
          else if (checkAisle(outerX, outerY, map)) {
            outerX += i;
            outerY += j;
            console.log(`${outerX}, ${outerY} outer x/y is aisle`);
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
  if (map[x][y] === "L" && fullSeats === 0) {
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
