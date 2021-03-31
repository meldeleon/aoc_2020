const input = require("fs")
  .readFileSync("day13.txt")
  .toString()
  .split("\n")[1]
  .split(",")

console.log(input)
let timestamp = 100000000000000
while (!checkTimestamp(input, timestamp)) {
  console.log(timestamp)
  timestamp++
}

function checkTimestamp(input, t) {
  //starting at the exact timestamp, check if the sequence of input works
  for (i = 0; i < input.length; i++) {
    if (!checkBusArrival(t + i, input[i])) {
      return false
    }
  }
  console.log("FOUND SOLUTION " + t)
  return true
}

// check if a specific timestamp is compatible with a specific bus ID
function checkBusArrival(t, busId) {
  if (busId === "x") {
    //console.log("ignored because x")
    return true
  }
  if (t % busId === 0) {
    //console.log(true)
    return true
  } else {
    //console.log(false)
    return false
  }
}
