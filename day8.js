const input = require("fs").readFileSync("day8.txt").toString().split("\n");
const inputMatrix = input.flatMap((x) => {
  let array = new Array(x.split(" "));
  array.forEach((x) => {
    x.splice(1, 1, parseInt(x[1]));
  });
  return array;
});

console.log(inputMatrix);
let executed = new Array(inputMatrix.length);
let accumulator = 0;
let counter = 0;

//solution 1

while (executed[counter] === undefined) {
  if (counter >= inputMatrix.length) {
    console.log("PROGRAM TERMINATED// final accumulator: " + accumulator);
    return;
  } else {
    console.table(executed);
    let currentCommand = inputMatrix[counter];
    console.log(currentCommand);
    let command, argument;
    [command, argument] = currentCommand;
    console.log(command);
    if (command === "acc") {
      accumulator = accumulator + argument;
      executed.splice(counter, 1, inputMatrix[counter]);
      counter++;
    } else if (command === "jmp") {
      counter += argument;
    } else {
      //do nothing
      counter++;
    }
  }
}
console.log(
  "TERMINATED BEFORE INFINITE LOOP // final accumulator: " + accumulator
);
