function convertArrayofArraystoSingleArray(data) {
  dataArray = [];
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      dataArray.push(data[i][j]);
    }
  }
  return dataArray;
}

function populateGrid(grid, data) {
  grid.find('td').each(function (index, td) {
    $(td).text(data[index] || '');
  });
}

function generateSudokuGrid() {
  return $('<table>').append(multiPush(9, function () {
    return $('<tr>').append(multiPush(9, function () {
      return $('<td>');
    }));
  })).addClass('sudoku');
}

function multiPush(count, func, scope) {
  var arr = [];
  for (var i = 0; i < count; i++) {
      arr.push(func.call(scope, i));
  }
  return arr;
}
