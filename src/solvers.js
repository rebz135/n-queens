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
  var solution = new Board({n: n});
  for (let i = 0; i < n; i++) {
    solution.togglePiece(i, i);
  }  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1;
  for (var i = 1; i <= n; i++) {
    solutionCount = solutionCount * i;
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
  let startBoard = new Board({n: n})

  //queenFunc (queensLeft = n, currentBoard = solution)
    //if ([r,c] is filled || there are col collisions || there are row collisions || there are majorDiagonal collisons || there are minorDiag collisons), then
      //return;
    //if (rooksLeft === 0),
      //return currentBoard;
    //for all r, starting from r=0 until r=n
        //for all c, starting from c=0 until c=n
            //toggle at r,c
              //run queenFunc(rooksLeft-1, currentBoard)
            //toggle at r,c
  let queenFinder = function (queensLeft = n, currentBoard = startBoard) {
    for (let r=0; r<n; r++) {
      for (let c=0; c<n; c++) {
        if (!!currentBoard.get(r)[c] || currentBoard.hasAnyQueensConflicts()) {
          return;
        } else if (queensLeft === 0) {
          console.log(currentBoard);
          return currentBoard;
        } else {
          currentBoard.togglePiece(r,c);
          if (queenFinder(queensLeft-1, currentBoard)) {
            return queenFinder(queensLeft-1, currentBoard);
          } else {
            queenFinder(queensLeft-1, currentBoard)
          }
        }
      }
    }
  }
  debugger;
  queenFinder();
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined;


  
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

console.log(findNQueensSolution(3));