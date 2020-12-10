const imported = require("fs")
  .readFileSync("day10.txt")
  .toString()
  .split("\r\n")

let input = imported.map((x) => {
  return parseInt(x)
})

//start with plug
input.push(0)

input = input.sort(function (a, b) {
  return a - b
})

let differenceArray = []

for (i = 0; i < input.length; i++) {
  let difference = input[i + 1] - input[i]
  if (difference <= 3) {
    differenceArray.push(difference)
  }
}

//final adapter
differenceArray.push(3)
console.log(differenceArray)

differenceArray = differenceArray.sort(function (a, b) {
  return a - b
})

//console.log(differenceArray)
let count1 = 0
let count3 = 0

for (i = 0; i < differenceArray.length; i++) {
  if (differenceArray[i] === 1) {
    count1++
  } else if (differenceArray[i] === 3) {
    count3++
  }
}
let answer = count1 * count3
console.log("solution 1 is: " + answer)
