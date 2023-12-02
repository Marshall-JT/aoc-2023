const fs = require("fs");

var fullInput = fs.readFileSync("day_2_input.txt", "utf8").split("\n");

const bagContents = {
  red: 12,
  green: 13,
  blue: 14,
};

var gameDict = fullInput.map((x) => {
  let parts = x.split(":");
  return {
    game: parts[0].slice(-1),
    cubeSet: parts[1].split(";").map((l) => l.trim()),
  };
});

var output = [];
for (let i = 0; i < Object.keys(gameDict).length; i++) {
  var move = gameDict[i]["cubeSet"];
  var ballsSelection = move.map((str) => str.split(", "));
  var gameSelections = [];

  for (let j = 0; j < ballsSelection.length; j++) {
    var selectionDict = {};
    ballsSelection[j].map((y) => {
      let parts = y.split(" ");
      return (selectionDict[parts[1]] = parseInt(parts[0]));
    });
    gameSelections.push(selectionDict);
  }

  output.push(gameSelections);
}

idSum = 0;
for (var i = 0; i < output.length; i++) {
  var validGame = true;
  var eachGame = output[i];
  for (let j = 0; j < eachGame.length; j++) {
    if ("red" in output[i][j] && output[i][j]["red"] > bagContents["red"]) {
      validGame = false;
      break;
    } else if (
      "green" in output[i][j] &&
      output[i][j]["green"] > bagContents["green"]
    ) {
      validGame = false;
      break;
    } else if (
      "blue" in output[i][j] &&
      output[i][j]["blue"] > bagContents["blue"]
    ) {
      validGame = false;
      break;
    } else {
      validGame = true;
    }
  }

  if (validGame == true) {
    idSum += i + 1;
  }
}

console.log(idSum);
