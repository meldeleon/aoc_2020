//const input = require("fs").readFileSync("12men_input.txt")

input = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1]

let group1 = input.slice(0, 4)
let group2 = input.slice(4, 8)
let group3 = input.slice(8, 12)

function solve(group1, group2, group3) {
  let first_weigh = weigh(group1, group2)
  if (first_weigh === "even") {
    //all the code to do 4 to 1
  }
}

function sum(array) {
  let arraySum = array.reduce((a, b) => a + b, 0)
  console.log(`sum of ${array} is ${arraySum}`)
  return arraySum
}

//function returns heavier side, if nothing returns then even
function weigh(left, right) {
  //check if array
  if (Array.isArray(left) && Array.isArray(right)) {
    let left_weight = sum(left)
    let right_weight = sum(right)
    if (left_weight === right_weight) {
      console.log("even")
      return "even"
    } else if (left_weight > right_weight) {
      console.log(`left is heavier ${left_weight}`)
      return left
    } else if (right_weight > left_weight) {
      console.log(`right is heavier ${right_weight}`)
      return right
    }
  } else {
    if (left === right) {
      console.log("even")
      return "even"
    } else if (left > right) {
      console.log(`left is heavier ${left}`)
      return left
    } else if (right > left) {
      console.log(`right is heavier ${right}`)
      return right
    }
  }
}

let test = solveFour([1, 1, 1, 0], [1, 1, 1, 1])
console.log(`fourTest: ${test}`)
function solveFour(array, normie) {
  if (weigh(array.slice(0, 2), normie.slice(0, 2)) === "even") {
    if (weigh(array[2], normie[0]) === "even") {
      return array[3]
    } else {
      return array[2]
    }
  } else {
    if (weigh(array[0], normie[0]) === "even") {
      return array[1]
    } else {
      return array[0]
    }
  }
}

weigh(group1, group2)
