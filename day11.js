const imported = require("fs")
  .readFileSync("day11.txt")
  .toString()
  .split("\r\n")
const input = imported.map((x) => {
  return x.split("")
})

function checkEmpty(seat) {
  if (seat === "L" || seat === ".") {
    return true
  } else {
    return false
  }
}

function checkFull(seat) {
  if (seat === "#") {
    return true
  } else {
    return false
  }
}

let loops = 2
for (let h = 0; h < loops; h++) {
  console.log("h: " + h)
  for (let i = 0; i < input.length; i++) {
    console.log("i: " + i)
    for (let j = 0; j < input[i].length; j++) {
      console.log("j: " + j)
      //assign seats
      let currentSeat = input[i][j]
      let right = input[i][j + 1]
      let rightDown = input[i + 1][j + 1]
      let down = input[i + 1][j]
      if (j > 0) {
        let leftDown = input[i + 1][j - 1]
        let left = input[i][j - 1]
        console.log(left)
      }
      if (i > 0) {
        let up = input[i - 1][j]
        let upRight = input[i - 1][j + 1]
      }
      if (i > 0 && j > 0) {
        let upLeft = input[i - 1][j - 1]
      }
      //first row
      if (i === 0) {
        //first seat
        if (j === 0) {
          if (
            checkEmpty(currentSeat) &&
            checkEmpty(right) &&
            checkEmpty(down) &&
            checkEmpty(rightDown)
          ) {
            currentSeat = "#"
            console.log(i + "," + j + " seat became occupied")
          } else {
            currentSeat = "L" //remain unoccupied
          }
        }
        //last seat
        else if (j === input[i].length - 1) {
          if (
            checkEmpty(currentSeat) &&
            checkEmpty(left) &&
            checkEmpty(leftDown) &&
            checkEmpty(down)
          ) {
            currentSeat = "#"
          } else {
            currentSeat = "L" //remain unoccupied
          }
        }
        //any seat
        else {
          if (
            checkEmpty(currentSeat) &&
            checkEmpty(left) &&
            checkEmpty(right) &&
            checkEmpty(leftDown) &&
            checkEmpty(down) &&
            checkEmpty(rightDown)
          ) {
            currentSeat = "#"
          } else if (checkFull(currentSeat)) {
            let occupied = 5
            if (checkEmpty(left)) {
              occupied--
            }
            if (checkEmpty(leftDown)) {
              occupied--
            }
            if (checkEmpty(down)) {
              occupied--
            }
            if (checkEmpty(rightDown)) {
              occupied--
            }
            if (checkEmpty(right)) {
              occupied--
            }
            if (occupied <= 3) {
              currentSeat = "L"
            }
          }
        }
      }
      //last row
      else if (i === input.length - 1) {
        //first seat
        if (j === 0) {
          if (
            checkEmpty(currentSeat) &&
            checkEmpty(right) &&
            checkEmpty(up) &&
            checkEmpty(upRight)
          ) {
            currentSeat = "#"
          } else {
            currentSeat = "L" //remain unoccupied
          }
        }
        //last seat
        else if (j === input[i].length - 1) {
          if (
            checkEmpty(currentSeat) &&
            checkEmpty(left) &&
            checkEmpty(up) &&
            checkEmpty(upLeft)
          ) {
            currentSeat = "#"
          } else {
            currentSeat = "L" //remain unoccupied
          }
        }
        //any seat
        else {
          if (
            checkEmpty(currentSeat) &&
            checkEmpty(left) &&
            checkEmpty(right) &&
            checkEmpty(upLeft) &&
            checkEmpty(up) &&
            checkEmpty(upRight)
          ) {
            currentSeat = "#"
          } else if (checkFull(currentSeat)) {
            let occupied = 5
            if (checkEmpty(left)) {
              occupied--
            }
            if (checkEmpty(right)) {
              occupied--
            }
            if (checkEmpty(upLeft)) {
              occupied--
            }
            if (checkEmpty(up)) {
              occupied--
            }
            if (checkEmpty(upRight)) {
              occupied--
            }
            if (occupied <= 4) {
              currentSeat = "L"
            }
          }
        }
      }
      //any row
      else {
        //first seat
        if (j === 0) {
          if (
            checkEmpty(currentSeat) &&
            checkEmpty(up) &&
            checkEmpty(upRight) &&
            checkEmpty(right) &&
            checkEmpty(down) &&
            checkEmpty(rightDown)
          ) {
            currentSeat = "#"
          } else if (checkFull(currentSeat)) {
            let occupied = 5
            if (checkEmpty(left)) {
              occupied--
            }
            if (checkEmpty(right)) {
              occupied--
            }
            if (checkEmpty(upLeft)) {
              occupied--
            }
            if (checkEmpty(up)) {
              occupied--
            }
            if (checkEmpty(upRight)) {
              occupied--
            }
            if (occupied <= 4) {
              currentSeat = "L"
            }
            if (occupied <= 3) {
              currentSeat = "L"
            }
          }
        }
        //last seat
        else if (j === input.length - 1) {
          if (
            checkEmpty(currentSeat) &&
            checkEmpty(up) &&
            checkEmpty(upLeft) &&
            checkEmpty(left) &&
            checkEmpty(leftDown) &&
            checkEmpty(down)
          ) {
            currentSeat = "#"
          } else if (checkFull(currentSeat)) {
            let occupied = 5
            if (checkEmpty(up)) {
              occupied--
            }
            if (checkEmpty(upLeft)) {
              occupied--
            }
            if (checkEmpty(left)) {
              occupied--
            }
            if (checkEmpty(leftDown)) {
              occupied--
            }
            if (checkEmpty(down)) {
              occupied--
            }
            if (occupied <= 4) {
              currentSeat = "L"
            }
            if (occupied <= 3) {
              currentSeat = "L"
            }
          }
        }
        //any seat
        else {
          if (
            checkEmpty(currentSeat) &&
            checkEmpty(left) &&
            checkEmpty(right) &&
            checkEmpty(leftDown) &&
            checkEmpty(down) &&
            checkEmpty(rightDown)
          ) {
            currentSeat = "#"
          } else if (checkFull(currentSeat)) {
            let occupied = 8
            if (checkEmpty(left)) {
              occupied--
            }
            if (checkEmpty(leftDown)) {
              occupied--
            }
            if (checkEmpty(down)) {
              occupied--
            }
            if (checkEmpty(rightDown)) {
              occupied--
            }
            if (checkEmpty(right)) {
              occupied--
            }
            if (checkEmpty(rightUp)) {
              occupied--
            }
            if (checkEmpty(up)) {
              occupied--
            }
            if (checkEmpty(upLeft)) {
              occupied--
            }
            if (occupied <= 3) {
              currentSeat = "L"
            }
          }
        }
      }
    }
  }
}

console.table(input)
