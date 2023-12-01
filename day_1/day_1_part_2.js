// Module imports
const fs = require("fs");

var fullInput = Array.from(
  fs
    .readFileSync(
      "/Users/joe/Documents/dev/aoc-2023/day_1/day_1_input.txt",
      "utf8"
    )
    .split("\n")
);

const intMapping = {
  one: "o1e",
  two: "t2o",
  three: "t3e",
  four: "f4r",
  five: "f5e",
  six: "s6x",
  seven: "s7n",
  eight: "e8t",
  nine: "n9e",
};

const intNames = Object.keys(intMapping);

var cleanInput = [];
for (let j = 0; j < fullInput.length; j++) {
  var numString = fullInput[j];
  for (let k = 0; k < intNames.length; k++) {
    if (numString.includes(intNames[k]) == true) {
      numString = numString.replaceAll(intNames[k], intMapping[intNames[k]]);
    }
  }

  cleanInput.push(numString);
}

var output = 0;
for (let i = 0; i < cleanInput.length; i++) {
  let chars = cleanInput[i].split("");
  var nums = "";

  for (let x = 0; x < chars.length; x++) {
    let char = chars[x];
    let num = "";

    if (Number.isInteger(parseInt(char)) == true) {
      num += char;
    }

    nums += num;
  }

  if (nums.length == 1) {
    var twodigit = nums[0] + nums[0];
  } else {
    var twodigit = nums[0] + nums.slice(-1);
  }

  output += parseInt(twodigit);
}

console.log(output);
