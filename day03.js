const input = require("fs").readFileSync("day03.txt").toString().split("\r\n")

let answer1 = () => {
  let trees = 0 //number of tree encountered
  let x = 1
  let y = 1
  input.forEach((string) => {
    if (string[x % 31] === "#") {
      trees++
    }
    x = x + 1
    y++
  })
  return trees
}
//This is the first star answer
let answer2 = () => {
  let trees = 0 //number of tree encountered
  let x = 3
  let y = 1
  input.forEach((string) => {
    if (string[x % 31] === "#") {
      trees++
    }
    x = x + 3
    y++
  })
  console.log("trees1:")
  return trees
}

let answer3 = () => {
  let trees = 0 //number of tree encountered
  let x = 5
  let y = 1
  input.forEach((string) => {
    if (string[x % 31] === "#") {
      trees++
    }
    x = x + 5
    y++
  })
  return trees
}

let answer4 = () => {
  let trees = 0 //number of tree encountered
  let x = 7
  let y = 1
  input.forEach((string) => {
    if (string[x % 31] === "#") {
      trees++
    }
    x = x + 7
    y++
  })
  return trees
}

let answer5 = () => {
  let trees = 0 //number of tree encountered
  let x = 1
  for (y = 1; y < input.length; y += 2) {
    if (input[y][x % 31] === "#") {
      trees++
    }
    x = x + 1
  }
  return trees
}

let finalAnswer = answer1() * answer2() * answer3() * answer4() * answer5()

console.log("final answer: " + finalAnswer)
