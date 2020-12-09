const imported = require("fs").readFileSync("day9.txt").toString().split("\n");
let input = imported.map((x) => {
  return parseInt(x);
});

const preamble = 25;
//console.log(input);

let validNumbers = [];

for (i = preamble; i < input.length; i++) {
  //console.log("checking " + input[i]);
  for (j = i; j > i - preamble; j--) {
    let difference = parseInt(input[i] - input[j - 1]);
    //console.log(difference);

    let slice = input.slice(i - preamble, i);
    //console.log("slice: " + slice);
    //console.log(slice.includes(difference));
    if (slice.includes(difference)) {
      //console.log(input[i] + " is good");
      validNumbers.push(input[i]);
    }
  }
}

//answer
let uniqueValidNumbers = new Set(validNumbers);
validNumbers = [...uniqueValidNumbers];
//console.log("valid answers: " + validNumbers);
let slicedInput = input.slice(preamble);
let answer = slicedInput.filter((x) => validNumbers.indexOf(x) === -1);
console.log("final answer: " + answer);
