$(document).ready(function () {

  var board = [
    [0, 9, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 9, 6, 0, 4, 8, 5],
    [0, 0, 0, 5, 8, 1, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 0, 0, 0],
    [5, 1, 7, 2, 0, 0, 9, 0, 0],
    [6, 0, 2, 0, 0, 0, 3, 7, 0],
    [1, 0, 0, 8, 0, 4, 0, 2, 0],
    [7, 0, 6, 0, 0, 0, 8, 1, 0],
    [3, 0, 0, 0, 9, 0, 0, 0, 0]
  ];

  var boardArray = convertArrayofArraystoSingleArray(board);

  $('#board')
    .prepend($('<div>').addClass('wrapper')
      .append($('<div>').addClass('col')
      .append(generateSudokuGrid()))
    );

  $('table[class^="sudoku"]').each(function (index, grid) {
    populateGrid($(grid), boardArray);
  });

  $('#solve').on('click', function(){
    var emptyPositions = getEmptyPositions(board);
    var solvedBoardArray = convertArrayofArraystoSingleArray(solvePuzzle(board, emptyPositions));
    $('table[class^="sudoku"]').each(function (index, grid) {
      populateGrid($(grid), solvedBoardArray);
    });
  });

});
