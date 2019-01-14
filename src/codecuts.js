// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

   
  var board = new Board({"n": n});


  var solutionCount = 0; //fixme

    //we want a rowTracker that will optimize the solution
  var rowTracker = 0;

  //and a col tracker that lets us know when moves have been invalidated;
  var colTracker = 0;

  var numMoves = 0; //num of valid moves & putting piece down
  var boardRows = board.rows();



  function findSol(boardRows, colTracker) {
      //base case in regards to picking a move
      //if numof valid moves equals board size
    if (numMoves === n) {
      //we have a solution! increment count
      solutionCount++;
      //but we cannot stop
      
    } else {
      //otherwise, place a move at the row and col trackers
      board.togglePiece(rowTracker, colTracker);
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