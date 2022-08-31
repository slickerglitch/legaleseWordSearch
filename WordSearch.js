(function (document, $, wordsearch) {

  // const Wordsearch = function () {
  //   Wordsearch.prototype.blanks = function (words, options) { };
  // };

  const drawBoard = (element, drawBoard) => { 
    let row = board[y],
      height = board.length,
      width = row.length,
      output = ''; // output string
   
    for (let y = 0; y < height; y++) {
      output += '<div>'; // Each row must be contained in its own div

      for (let x = 0; x < width; x++) {
        // Building the HTML string that will be output to the page
        output += '<button class="square" x="' + x + '" y="' + y + '"></button>';
        output += row[y] || '&nbsp;'; // Either output the letter at curr index[y] or a space
        output += '</button>'; // Append the button closing tag

      }

      output += '</div>'; // Append the div closing tag after each row
    }

    $(element).html(output); // Output the HTML string to the page
  };

  const getWords = () => $('input.word').toArray().map(wordSel => wordSel.val.toLowerCase()).filter(word => word);
  
  const getBearings = (x1, x2, y1, y2) => { 
    // 'bear' is short for 'bearing'
    // 'bears' is short for 'bearings'
    for (let bear in wordsearch.bears) {
      let next = wordsearch.bears[bear];
      let nextRel = next(x1, y1, 1);

      //nextRel.x === x2 && nextRel.y === y2 ? bear : null; 
      if (nextRel.x === x2 && nextRel.y === y2) {
        return bear;
      }
    }
    return null; 
  };

/* Prototypes allow you to easily define methods to all instances of a particular object. 
The beauty is that the method is applied to the prototype, so it is only stored in the memory once, 
but every instance of the object has access to it. */
  const WordSearch = function (words, options) { 
    this.boardSquares = $('.square').toArray(); 
    this.boardSquares.length - this.boardSquares.filter(cont => cont.content.trim()).length; 
    // Remove whitespace from the board and count the number of empty squares
  };

  WordSearch.prototype.prependTo = function (element, word) { 
    $('<li><input class="word" value="' + (word || '') + '"></li>').prependTo(element); 
  };


  window.WordSearch = WordSearch; 
}(document, jQuery, Wordsearch)); 