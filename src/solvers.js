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



window.findNRooksSolution = function(n) {
  var aBoard = new Board({n: n})
  for (let i = 0; i < n; i++) {
    aBoard.togglePiece(i, i);
  }

  // var board = new Board([[1,0,0],[0,1,0],[0,0,1]])

  //[[1,0,0],[0,1,0],[0,0,1]]

  //toggle down the zero major diagonal gurantees solution each time no matter how big n is

  var solution = aBoard.rows()

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
   
  var board = new Board({"n": n});
  var solutionCount = 0; //fixme
  var boardRows = board.rows();

  function findSol(boardRows, rooksPlaced) {

    if (rooksPlaced === n) {
      solutionCount++;
    } else {
      for (let i = 0; i < boardRows.length; i++) {
        board.togglePiece(0, i);
        if (!board.hasRowConflictAt(0) || board.hasAnyColConflicts()) {
            
        }
      }
      //when a row is selected via a move, remove possibility of said row with rocktracker++
      //if board does not have any col, it is a valid move
      if (!board.hasAnyColConflicts()) {
        //therefore, you can increment the col tracker so you know not to place future moves there
        rowTracker++;
        numMoves++;
        //and now recurse...  
      } else {
        //if there is a conflict, 
        //turn off the move
        board.togglePiece(rowTracker, colTracker);
        findSol(boardRows, colTracker + 1)
        //recurse
      }
    }
    //we also must note that every time we get an actual solution, we must increment the count
    //back track to a degree
    //and then.... refind another solution
    //and keep going until we have exhausted all poss solutions



  }
 


 

    //if the row has been checked, we will increment the row counter
  //we want a column tracker 
    //this will be incremented when the column conflict comes back true

    //each choice is a parent to another set of choices or potential solutions
    //therefore when one solution is found 

    //base case so to speak

    //each choice is a the start of a new tree
    //for eaech choice that is made, a row tracker can track the column in which the choice was made and remove that row
    //from possible future choices in this sub tree
    //every time a choice is made, the choice needs to be checked for validity (col checks)
    //if validity checks out, the piece stays.
         //when the choice is valid, the rookscount is updated
        //as is the row tracker
        //and then we check whether n === rookscount
    //if validity does not check out, the piece does not stay (toggled back off)
      //we track the bad choice by incrementing the col tracker - aka "THIS COL IS OFF LIMITS BASED ON THIS PATH"
      //and then we... add continue trying to add pieces until the choice becomes valid
      //at which point we end up once again checking whether n == rookscount;
 

      //solution branch - once a solution is found PATH to be updated:
    //
  //
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
