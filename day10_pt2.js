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

let count = 1

let streakArray = []

for (j = 1; j < differenceArray.length + 1; j++) {
  if (
    differenceArray[j] === 1 &&
    differenceArray[j] === differenceArray[j - 1]
  ) {
    count++
  } else {
    streakArray.push(count)
    count = 1
  }
}
console.log(streakArray)

function trib(int) {
  if (int === 1) {
    return 0
  } else if (int === 2) {
    return 1
  } else if (int === 3) {
    return 3
  }
}
//1, 1, 2, 4, 7, 13
// 0  1  2  3  4  5

function trib(num) {
  if (num === 1) return 1
  if (num === 2) return 1
  if (num === 3) return 2
  let num1 = 1
  let num2 = 1
  let num3 = 2
  let sum
  let i = 3
  while (i < num) {
    sum = num1 + num2 + num3
    num1 = num2
    num2 = num3
    num3 = sum
    i++
  }
  return num3
}

let paths = 1
for (i = 0; i < streakArray.length; i++) {
  if (streakArray[i] === 1) {
  } else {
    paths = paths * trib(streakArray[i] + 1)
  }
}

console.log("answer: " + paths)
