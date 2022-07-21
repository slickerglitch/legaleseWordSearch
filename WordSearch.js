//#region Global

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var orientations = [
   'horizontal',
   'horizontalBack',
   'vertical',
   'verticalUp',
   'diagonal',
   'diagonalUp',
   'diagonalBack',
   'diagonalUpBack',
];

var orientCoords = {
  horizontal: function (x, y, i) {
    return { x: x + i, y: y };
  },
  horizontalBack: function (x, y, i) {
    return { x: x - i, y: y };
  },
  vertical: function (x, y, i) {
    return { x: x, y: y + i };
  },
  verticalUp: function (x, y, i) {
    return { x: x, y: y - i };
  },
  diagonal: function (x, y, i) {
    return { x: x + i, y: y + i };
  },
  diagonalBack: function (x, y, i) {
    return { x: x - i, y: y + i };
  },
  diagonalUp: function (x, y, i) {
    return { x: x + i, y: y - i };
  },
  diagonalUpBack: function (x, y, i) {
    return { x: x - i, y: y - i };
  }
};

var validOrientations = {
  horizontal: function (x, y, h, w, l) {
        return w >= x + l;
      },
      horizontalBack: function (x, y, h, w, l) {
        return x + 1 >= l;
      },
      vertical: function (x, y, h, w, l) {
        return h >= y + l;
      },
      verticalUp: function (x, y, h, w, l) {
        return y + 1 >= l;
      },
      diagonal: function (x, y, h, w, l) {
        return w >= x + l && h >= y + l;
      },
      diagonalBack: function (x, y, h, w, l) {
        return x + 1 >= l && h >= y + l;
      },
      diagonalUp: function (x, y, h, w, l) {
        return w >= x + l && y + 1 >= l;
      },
      diagonalUpBack: function (x, y, h, w, l) {
        return x + 1 >= l && y + 1 >= l;
      },
  };

var options = {
         height: opts.height || wordList[0].length,
          width: opts.width || wordList[0].length,
   orientations: opts.orientations || allOrientations,
     //fillBlanks: opts.fillBlanks !== undefined ? opts.fillBlanks : true,
   blanks: opts.blanks !== undefined ? opts.blanks : true, // <--- Or `fillBlanks`(?)
  // maxAttempts:  opts.maxAttempts || 3,
  preferOverlap: opts.preferOverlap !== undefined ? opts.preferOverlap : true,
};

//#endregion Global 

const WordSearch = function () {


  WordSearch.prototype.blanks = function (words, options) { };

};