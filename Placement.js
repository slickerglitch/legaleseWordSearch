const placementConstraints = {


  directions: {
    top: 'top',
    down: 'down',
    left: 'left',
    right: 'right',
    diagRiseRight: 'diagRiseRight',
    diagFallRight: 'diagFallRight',
    diagRiseLeft: 'diagRiseLeft',
    diagFallLeft: 'diagFallLeft',
  },

  //directions = [top, down, left, right, diagRiseRight, diagFallRight, diagRiseLeft, diagFallLeft];
  //*-Note-> I might want to declare directions Obj as an Array instead
 
  coords: {
      horizontal:     function(x,y,i) { return {x: x+i, y: y  }; },
      horizontalBack: function(x,y,i) { return {x: x-i, y: y  }; },
      down:       function(x,y,i) { return {x: x,   y: y+i}; },
      top:     function(x,y,i) { return {x: x,   y: y-i}; },
      diagonal:       function(x,y,i) { return {x: x+i, y: y+i}; },
      diagonalBack:   function(x,y,i) { return {x: x-i, y: y+i}; },
      diagonalUp:     function(x,y,i) { return {x: x+i, y: y-i}; },
      diagonalUpBack: function(x,y,i) { return {x: x-i, y: y-i}; }
    },

 




};
// End Placement.js