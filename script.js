/*Factory Function to create Politicians*/
var createPolitician = function (name, partyColor) {

  var politician = {};

  politician.name = name;

  politician.electionResults = null;

  politician.totalVotes = 0;

  politician.tallyUpTotalVotes = function () {

    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }

  politician.partyColor = partyColor;

};

  return politician;

};

/*Party Colors*/
var BH = createPolitician ("Brooklyn Hytes", [132, 17, 11]);
var DDC = createPolitician ("Divina De Campo", [245, 141, 136]);

console.log (BH, DDC);

console.log (BH.name + "'s color is: " + BH.partyColor);
console.log (DDC.name + "'s color is: " + DDC.partyColor);

/*State Election Results*/
BH.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

BH.electionResults [9] = 1;
BH.electionResults [4] = 17;
BH.electionResults [43] = 11;

DDC.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

DDC.electionResults [9] = 28;
DDC.electionResults [4] = 38;
DDC.electionResults [43] = 27;

var setStateResults = function (state) {

  theStates[state].winner = null;

  if (BH.electionResults[state] > DDC.electionResults[state]) {

    theStates[state].winner = BH;

  } else if (BH.electionResults[state] < DDC.electionResults[state]) {

    theStates[state].winner = DDC;
  }

  var stateWinner = theStates[state].winner;

  if (theStates[state].winner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11,32,57];
  }

  /*Interactive Table Bottom Right of Map*/
  var stateInfoTable = document.getElementById('stateResults');

  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];

  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

  candidate1Name.innerText = BH.name;
  candidate2Name.innerText = DDC.name;

  candidate1Results.innerText = BH.electionResults[state];
  candidate2Results.innerText = DDC.electionResults[state];

  winnersName.innerText = null;

  if (theStates[state].winner === null) {
    winnersName.innerText = "DRAW";
  } else {
    winnersName.innerText = theStates[state].winner.name;
  }
};

BH.tallyUpTotalVotes();
DDC.tallyUpTotalVotes();

console.log (BH.totalVotes);
console.log (DDC.totalVotes);

var winner = "???";

  if (BH.totalVotes > DDC.totalVotes){
    winner = BH.name;
  }
  else if (BH.totalVotes < DDC.totalVotes) {
    winner = DDC.name;
  }
  else {
    winner = "DRAW."
  }

console.log ("AND THE WINNER IS..." +winner+ "!!!");

/*static Table Above Map*/
var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = "Brooklyn Hytes";
row.children[1].innerText = BH.totalVotes;
row.children[2].innerText = "Divina De Campo";
row.children[3].innerText = DDC.totalVotes;
row.children[5].innerText = winner;
