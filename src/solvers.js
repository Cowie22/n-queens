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
<<<<<<< HEAD

 var board = new Board({'n': n}); 

  //we need an inner solution that will increment our counter
 var solution = solutionFinder(0, n, board, "hasAnyRooksConflicts", function() {
    return _.map(board.rows(), function(row) {
      return row.slice();
    });
  });
=======
  var aBoard = new Board({n: n})
  for (let i = 0; i < n; i++) {
    aBoard.togglePiece(i, i);
  }

  // var board = new Board([[1,0,0],[0,1,0],[0,0,1]])

  //[[1,0,0],[0,1,0],[0,0,1]]

  //toggle down the zero major diagonal gurantees solution each time no matter how big n is

  var solution = aBoard.rows()
>>>>>>> b508ba25993c6b4179af02f25e87cd41fbf32d31

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
<<<<<<< HEAD
  var solutionCount = 0;
  var board = new Board({'n': n}); 

  //we need an inner solution that will increment our counter
  solutionFinder(0, n, board, "hasAnyRooksConflicts",function() {
    solutionCount++;
  });
=======
   
  var board = new Board({"n": n});
  var solutionCount = 0; //fixme
  var boardRows = board.rows();
  var solutionKeeper = [];
>>>>>>> b508ba25993c6b4179af02f25e87cd41fbf32d31

  function findSol(row, rooksPlaced) {
    if (rooksPlaced === n) {
      solutionKeeper.push(boardRows);
      return;
    }
    for (let i = 0; i < boardRows.length; i++) {
      board.togglePiece(row, rooksPlaced);
      if (!board.hasAnyColConflicts(i)) {
        solutionCount++;
      } else {
        board.togglePiece(row, rooksPlaced);
        findSol(row + 1, rooksPlaced + 1);
    }
  }
}
findSol(0, 0);
console.log(solutionKeeper)
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
