const input = require("fs").readFileSync("day08.txt").toString().split("\n");
const inputMatrix = input.flatMap((x) => {
  let array = new Array(x.split(" "));
  array.forEach((x) => {
    x[1] = parseInt(x[1]);
  });
  return array;
});

let executed = new Array(inputMatrix.length);
let accumulator = 0;
let counter = 0;

runLoop(inputMatrix, counter, accumulator);

function runLoop(inputMatrix, counter, accumulator) {
  if (counter >= inputMatrix.length) {
    console.log(
      "PROGRAM TERMINATED NATURALLY// final accumulator: " + accumulator
    );
    return;
  } else {
    while (executed[counter] === undefined) {
      let currentCommand = inputMatrix[counter];
      let command, argument;
      [command, argument] = currentCommand;
      //console.log("==== ORIGINAL LOOP Check =====");
      //console.log("current iteration: " + currentCommand);
      //console.log("current command: " + command);
      if (command === "acc") {
        accumulator = accumulator + argument;
        executed.splice(counter, 1, inputMatrix[counter]);
        counter++;
      } else if (command === "jmp") {
        if (
          runAlternate(inputMatrix, counter, executed, accumulator) === true
        ) {
          return;
        } else {
          counter += argument;
        }
      } else {
        if (
          runAlternate(inputMatrix, counter, executed, accumulator) === true
        ) {
          return;
        } else {
          counter++;
        }
      }
    }
  }
  console.log("loop ended for original condition");
  console.log("final accumulator: " + accumulator);
}

function runAlternate(inputMatrix, counter, executed, accumulator) {
  let alternateCommand = null;
  let currentCommand = inputMatrix[counter];
  console.log("running alternate scenario for: " + currentCommand);
  let command, argument;

  [command, argument] = currentCommand;
  if (command === "jmp") {
    alternateCommand = "nop";
  } else if (command === "nop") {
    alternateCommand = "jmp";
  } else {
    alternateCommand = "acc";
  }
  let alternateInputMatrix = [...inputMatrix];
  alternateInputMatrix[counter] = [alternateCommand, argument];
  console.log("alternate index: " + counter);
  let alternateExecuted = [...executed];
  //run alternate
  while (alternateExecuted[counter] === undefined) {
    if (counter >= alternateInputMatrix.length) {
      console.log(
        "ALTERNATE PROGRAM TERMINATED NATURALLY// final accumulator: " +
          accumulator
      );
      return true;
    } else {
      //console.table(alternateExecuted);
      let currentCommand = alternateInputMatrix[counter];
      //console.log(currentCommand);
      let command, argument;
      [command, argument] = currentCommand;
      //console.log(command);
      if (command === "acc") {
        accumulator = accumulator + argument;
        alternateExecuted[counter] = alternateInputMatrix[counter];
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
  return false;
}
