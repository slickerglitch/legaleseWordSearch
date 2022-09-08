const solSystem = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Asteroid Belt',
  'Jupiter',
  'Uranus',
  'Neptune',
  'Saturn',
  'Kuiper Belt Objects',
  'Pluto',
  'Charon',
  'Eris',
  'Ixion',
  'Varuna',
  'Makemake',
  'Haumea',
  'Orcus',
  'Quaoar',
  'Varda',
];
const norseGroup = [
  'Skathi',
  'Skoll',
  'Greip',
  'Hyrrokkin',
  'Jarnsaxa',
  'Mundilfari',
  'Narvi',
  'Bergelmir',
  'Suttungr',
  'Hati',
  'Bestla',
  'Farbauti',
  'Thrymr',
  'Aegir',
  'Kari',
  'Fenrir',
  'Surtur',
  'Ymir',
  'Loge',
  'Fornjot',
];
solSystem[9] = norseGroup; //console.log(solSystem);
const terms = solSystem.flatMap((term) => term); //console.log(terms);
//console.log('\n', 'Total Items Remaining in List:', terms.length.toString());

///////////////////////////////////////////////
////// VARIABLES ABOVE FOR TESTING ONLY //////
/////////////////////////////////////////////
const letters = 'abcdefghijklmnopqrstuvwxyz';

let legalese = [
  'affidavit',
  'misconduct',
  'disbarment',
  'datbarment',
  'enre',
  'judge',
];
let selWords = [];
//let terms = selWords;
//let terms = legalese;

const wordGrabber = (arr) => {
  if (selWords.length === 5) {
    return selWords;
  } else {
    let random = Math.floor(Math.random() * arr.length - 1);
    //spread operator adds strings only instead of arrays in arrays/remove if you want array of arrays
    selWords.push(...arr.splice(random, 1));
    return wordGrabber(arr);
  }
};


$(function () {
  const words = wordGrabber(terms);
  // start a word find game
  // let gamePuzzle = wordfindgame.create(words, '#board', '#words', {
  //   height: 8,
  //   width: 15,
  //   fillBlanks: true,
  // });

  // // create just a puzzle, without filling in the blanks and print to console
  // let puzzle = wordfind.newPuzzle(words, {
  //   height: 5,
  //   width: 15,
  //   fillBlanks: true,
  // });
  //wordfind.print(puzzle);
});
