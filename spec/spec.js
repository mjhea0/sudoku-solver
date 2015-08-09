code = require('../js/solver.js');

var board;


describe('Sudoko Solver', function(){

  beforeEach(function(){
    board = [
      [0,9,0,0,0,0,0,0,6],
      [0,0,0,9,6,0,4,8,5],
      [0,0,0,5,8,1,0,0,0],
      [0,0,4,0,0,0,0,0,0],
      [5,1,7,2,0,0,9,0,0],
      [6,0,2,0,0,0,3,7,0],
      [1,0,0,8,0,4,0,2,0],
      [7,0,6,0,0,0,8,1,0],
      [3,0,0,0,9,0,0,0,0]
    ];
  });

  describe('#getEmptyPositions()', function() {
    it('should return an array of all empty positions', function() {
      var expectedEmptyPositions = [
        [0,0],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[1,0],[1,1],
        [1,2],[1,5],[2,0],[2,1],[2,2],[2,6],[2,7],[2,8],[3,0],
        [3,1],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[4,4],[4,5],
        [4,7],[4,8],[5,1],[5,3],[5,4],[5,5],[5,8],[6,1],[6,2],
        [6,4],[6,6],[6,8],[7,1],[7,3],[7,4],[7,5],[7,8],[8,1],
        [8,2],[8,3],[8,5],[8,6],[8,7],[8,8]
      ];
      expect(code.getEmptyPositions(board).length).toEqual(51);
      expect(code.getEmptyPositions(board)).toEqual(expectedEmptyPositions);
    });
  });

  describe('#checkRowForValue()', function() {
    it('should return false if a given value is not in the row', function() {
      expect(code.checkRowForValue(board, 0, 5)).toEqual(false);
      expect(code.checkRowForValue(board, 5, 7)).toEqual(true);
      expect(code.checkRowForValue(board, 8, 9)).not.toEqual(false);
    });
  });

  describe('#checkColumnForValue()', function() {
    it('should return false if a given value is not in the column', function() {
      expect(code.checkColumnForValue(board, 0, 5)).toEqual(true);
      expect(code.checkColumnForValue(board, 5, 1)).toEqual(true);
      expect(code.checkColumnForValue(board, 8, 6)).not.toEqual(false);
    });
  });


  describe('#checkThreeByThreeSquareForValue()', function() {
    it('should return false if a given value is not in the 3x3 square', function() {
      expect(code.checkThreeByThreeSquareForValue(board, 2, 2, 9)).toEqual(true);
      expect(code.checkThreeByThreeSquareForValue(board, 4, 4, 9)).toEqual(false);
      expect(code.checkThreeByThreeSquareForValue(board, 7, 7, 1)).toEqual(true);
    });
  });

  describe('#checkRowColumnSquareForValue()', function() {
    it('should return false if a given value is not found', function() {
      expect(code.checkRowColumnSquareForValue(board, 5, 0, 7)).toEqual(true);
      expect(code.checkRowColumnSquareForValue(board, 2, 0, 5)).toEqual(true);
      expect(code.checkRowColumnSquareForValue(board, 4, 4, 9)).toEqual(false);
      expect(code.checkRowColumnSquareForValue(board, 7, 7, 1)).toEqual(false);
    });
  });

  describe('#solvePuzzle()', function() {
    it('should find a solution', function() {
      var expectedSolution = [
        [ 8,9,5,7,4,2,1,3,6 ],
        [ 2,7,1,9,6,3,4,8,5 ],
        [ 4,6,3,5,8,1,7,9,2 ],
        [ 9,3,4,6,1,7,2,5,8 ],
        [ 5,1,7,2,3,8,9,6,4 ],
        [ 6,8,2,4,5,9,3,7,1 ],
        [ 1,5,9,8,7,4,6,2,3 ],
        [ 7,4,6,3,2,5,8,1,9 ],
        [ 3,2,8,1,9,6,5,4,7 ]
      ];
      var solution = code.solvePuzzle(board, code.getEmptyPositions(board));
      expect(solution).toEqual(expectedSolution);
    });
  });

  describe('#solve()', function() {
    it('should find a solution', function() {
      var expectedSolution = [
        [ 8,9,5,7,4,2,1,3,6 ],
        [ 2,7,1,9,6,3,4,8,5 ],
        [ 4,6,3,5,8,1,7,9,2 ],
        [ 9,3,4,6,1,7,2,5,8 ],
        [ 5,1,7,2,3,8,9,6,4 ],
        [ 6,8,2,4,5,9,3,7,1 ],
        [ 1,5,9,8,7,4,6,2,3 ],
        [ 7,4,6,3,2,5,8,1,9 ],
        [ 3,2,8,1,9,6,5,4,7 ]
      ];
      expect(code.solve(board)).toEqual(expectedSolution);
    });
  });


});
