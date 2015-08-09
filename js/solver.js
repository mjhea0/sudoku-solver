function getEmptyPositions(board) {

  /*
  Given a board array, return an array of arrays with the empty positions.
  Empty positions are elements with a zero.
  */

  var emptyPositions = [];
  for(var i = 0; i < board.length; i++) {
    for(var j = 0; j < board[i].length; j++) {
      if(board[i][j] === 0) {
        emptyPositions.push([i, j]);
      }
    }
  }
  return emptyPositions;

}

function checkRowForValue(board, rowNum, value) {

  /*

  Iterate through a given row and
    - return false if a match is not found
    - return true if a match is found

  */

  for(var i = 0; i < board[rowNum].length; i++) {
    if(board[rowNum][i] === value) {
      return true;
    }
  }
  return false;

}

function checkColumnForValue(board, columnNum, value) {

  /*

  Iterate through a given column and
    - return false if a match is not found
    - return true if a match is found

  */

  for(var i = 0; i < board.length; i++) {
    if(board[i][columnNum] === value) {
      return true;
    }
  }
  return false;

}

function checkThreeByThreeSquareForValue(board, columnNum, rowNum, value) {

  /*

  Starting at the top, left-hand corner-
    - find the correct row
    - find the correct column
  Iterate through a the correct row and column and
    - return false if a match is not found
    - return true if a match is found

  */

  var columnCorner = 0;
  var rowCorner = 0;
  var squareSize = 3;

  while(rowNum >= rowCorner + squareSize) {
    rowCorner += squareSize;
  }

  while(columnNum >= columnCorner + squareSize) {
    columnCorner += squareSize;
  }

  for(var i = rowCorner; i < rowCorner + squareSize; i++) {
    for(var j = columnCorner; j < columnCorner + squareSize; j++) {
      if(board[i][j] === value) {
        return true;
      }
    }
  }
  return false;

}

checkRowColumnSquareForValue = function(board, columnNum, rownum, value) {
  if(!this.checkRowForValue(board, rownum, value) &&
    !this.checkColumnForValue(board, columnNum, value) &&
    !this.checkThreeByThreeSquareForValue(board, columnNum, rownum, value)) {
    return true;
  } else {
    return false;
  }
};

 function solvePuzzle(board, emptyPositions) {

  var limit = 9;
  var i;
  var row;
  var column;
  var value;
  var found;

  for(i = 0; i < emptyPositions.length;) {
    // row to check
    row = emptyPositions[i][0];
    // column to check
    column = emptyPositions[i][1];
    // value to check
    value = board[row][column] + 1;
    // found defaults to false
    found = false;
    // continue until value is found or limit is reached
    while(!found && value <= limit) {
      /*
      If a value is found -
        - assign found to true,
        - set the position to the value
        - move to the next position to check for it
      */
      if(this.checkRowColumnSquareForValue(board, column, row, value)) {
        found = true;
        board[row][column] = value;
        i++;
      } else {
        value++;
      }
    }
    // If no valid value is found, move back to the previous position
    if(!found) {
      board[row][column] = 0;
      i--;
    }
  }

  return board;
}

function solve(board) {
  var emptyPositions = this.getEmptyPositions(board);
  return this.solvePuzzle(board, emptyPositions);
}


module.exports = {
  getEmptyPositions: getEmptyPositions,
  checkRowForValue: checkRowForValue,
  checkColumnForValue: checkColumnForValue,
  checkThreeByThreeSquareForValue: checkThreeByThreeSquareForValue,
  checkRowColumnSquareForValue: checkRowColumnSquareForValue,
  solvePuzzle: solvePuzzle,
  solve: solve
};
