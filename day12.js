const input = require("fs").readFileSync("day12.txt").toString().split("\n")

//store directions as index
const cardinalDirections = ["N", "E", "S", "W"]
//create move log
const moves = []

// create ship as object, properties as state
let ship = {
  facing: "E", //E
  north: 0,
  south: 0,
  east: 0,
  west: 0,
}

function checkDirection(direction) {
  return direction === ship.facing
}

function turn(direction, degrees) {
  // console.log(`ship facing: ${ship.facing}`)
  let currentDirection = cardinalDirections.findIndex(checkDirection)
  // console.log(currentDirection)
  let turns = degrees / 90
  // console.log(turns)
  if (direction === "R") {
    let newIndex = (currentDirection + turns) % 4
    console.log(`new index:  ${newIndex}`)
    ship.facing = cardinalDirections[newIndex]
  } else if (direction === "L") {
    let newIndex = (currentDirection + (4 - turns)) % 4
    console.log(`new index:  ${newIndex}`)
    ship.facing = cardinalDirections[newIndex]
  } else {
    // console.log("invalid turning direction")
  }
}

function travel(cardinal, distance) {
  switch (cardinal) {
    case "N":
      ship.north += distance
      break
    case "E":
      ship.east += distance
      break
    case "S":
      ship.south += distance
      break
    case "W":
      ship.west += distance
      break
  }
}

function executeCommand(command, ship) {
  let prefix = command.match(/^[A-Z]/).toString()
  let distanceOrDegreses = parseInt(command.match(/[0-9].*/))
  console.log(prefix, distanceOrDegreses)
  if (prefix === "N" || prefix === "E" || prefix === "S" || prefix === "W") {
    travel(prefix, distanceOrDegreses)
  } else if (prefix === "R" || prefix === "L") {
    turn(prefix, distanceOrDegreses)
  } else if (prefix === "F") {
    travel(ship.facing, distanceOrDegreses)
  } else {
    console.log("invalid command")
  }
  console.log(ship)
}

input.forEach((command) => {
  executeCommand(command, ship)
})

let solution =
  Math.abs(ship.north - ship.south) + Math.abs(ship.east - ship.west)

console.log(solution)
