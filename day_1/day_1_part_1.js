// Module imports
const fs = require("fs");

var fullInput = fs.readFileSync("day_1_input.txt", "utf8").split("\n");

var output = 0;
for (let i = 0; i < fullInput.length; i++) {
  let chars = fullInput[i].split("");
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
