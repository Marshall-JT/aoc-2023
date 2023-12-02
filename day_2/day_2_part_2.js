const fs = require("fs");

var fullInput = fs.readFileSync("day_2_input.txt", "utf8").split("\n");

const redRe = /\d+ red/g;
const greenRe = /\d+ green/g;
const blueRe = /\d+ blue/g;

var fullArray = [];
for (row = 0; row < fullInput.length; row++) {
  var matchArray = [];
  matchArray.push(
    fullInput[row].match(redRe),
    fullInput[row].match(greenRe),
    fullInput[row].match(blueRe)
  );
  fullArray.push(matchArray);
}

for (var i = 0; i < fullArray.length; i++) {
  // var arrVals = fullArray[i].map((e) => e.slice(-1));
  for (let j = 0; j < fullArray[i].length; j++) {
    fullArray[i][j] = fullArray[i][j]
      .map((s) => parseInt(s.replace(/\D/g, "")))
      .sort(function (a, b) {
        return a - b;
      })
      .slice(-1);
    // let minVals = arrVals.map((l) => parseInt(l[0][0]));
    // var product = minVals[0] * minVals[1] * minVals[2];
  }
}

total = 0;
for (let x = 0; x < fullArray.length; x++) {
  total += fullArray[x][0][0] * fullArray[x][1][0] * fullArray[x][2][0];
}

console.log(total);
