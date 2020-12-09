const input = require("fs").readFileSync("day9.txt").toString().split("\n");
const preamble = 5;
console.log(input);

for (i = preamble; i < input.length; i++) {
  console.log("checking " + input[i]);
  for (j = i; j > i - preamble; j--) {
    let difference = parseInt(input[i] - input[j - 1]);
    console.log(difference);

    let slice = input.slice(i - preamble, i);
    console.log("slice: " + slice);
    console.log(slice.includes(difference));

    if (slice.includes(difference)) {
      console.log(input[i] + " is good");
      return true;
    }
  }
}
