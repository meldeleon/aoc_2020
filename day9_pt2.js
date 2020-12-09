const { truncate } = require("fs/promises");

const imported = require("fs").readFileSync("day9.txt").toString().split("\n");
let input = imported.map((x) => {
  return parseInt(x);
});
const magicNumber = 41682220;
//const magicNumber = 127;

for (h = 0; h < input.length; h++) {
  let runningSum = [0];
  for (i = h + 1; i < input.length; i++) {
    let previousSum = runningSum[runningSum.length - 1];
    let sum = previousSum + input[i];
    runningSum.push(sum);
    if (sum === magicNumber) {
      let solutionArray = input.slice(h + 1, i + 1);
      console.table(solutionArray);
      let answer = Math.min(...solutionArray) + Math.max(...solutionArray);
      console.log("The answer is: " + answer);
      return true;
    }
  }
}
