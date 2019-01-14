/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.solutionFinder = function(rowIndex, n, board, isValid, callback) {

    if (rowIndex === n) {
      return callback();
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(rowIndex, i);
      if (!board[isValid]()) {
        var result = solutionFinder(rowIndex + 1, n, board, isValid, callback);
        if (result) {
          return result;
        }
      }
      board.togglePiece(rowIndex, i);
    }
    //if all rows have been checked
    //increment solution count
    //and then stop the recursion

    //itterate over the possible decisions in a row
    //place a piece in the row
    //recurse into the remaining problem
    //remove piece from the row

  };


window.findNRooksSolution = function(n) {

 var board = new Board({'n': n}); 

  //we need an inner solution that will increment our counter
 var solution = solutionFinder(0, n, board, "hasAnyRooksConflicts", function() {
    return _.map(board.rows(), function(row) {
      return row.slice();
    });
  });


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({'n': n}); 

  //we need an inner solution that will increment our counter
  solutionFinder(0, n, board, "hasAnyRooksConflicts",function() {
    solutionCount++;
  });
   
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
 
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var board = new Board({'n': n});

  //we need an inner solution that will increment our counter
  var solution = solutionFinder(0, n, board, "hasAnyQueensConflicts", function() {
    return _.map(board.rows(), function(row) {
      return row.slice();
    });
  }) || board.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({'n': n})

  solutionFinder(0, n, board, "hasAnyQueensConflicts", function() {
    solutionCount++;
  });


  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
