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
  var solution;
  
  let queenFinder = function (queensLeft, currentBoard = startBoard) {
    for (let r=0; r<n; r++) {
      for (let c=0; c<n; c++) {
        if (solution) {
          return;
        } else if (!!currentBoard.get(r)[c]) {
        } else if (queensLeft === 0) {
          console.log(currentBoard);
          solution = currentBoard;
          queensLeft = n;
        } else {
          currentBoard.togglePiece(r,c);
          if (!currentBoard.hasAnyQueensConflicts()) {
            queensLeft--;
            queenFinder(queensLeft, currentBoard);
          } else {
            currentBoard.togglePiece(r,c);
          }
        }
      }
      
    }
  }
  
  let initializeBoard = function () {
    for (let r=0; r<n; r++) {
      for (let c=0; c<n; c++) {
        let startBoard = new Board({n: n});
        startBoard.togglePiece(r,c);
        queenFinder(n-1, startBoard);
        if (solution) {
          return;
        }
      }
    }
  }
  initializeBoard();
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};
  
// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  
  var solutionObj = {};
  
  let queenFinder = function (queensLeft, currentBoard = startBoard) {
    for (let r=0; r<n; r++) {
      for (let c=0; c<n; c++) {
        if (solutionObj[JSON.stringify(currentBoard)]) {
          return;
        } else if (!!currentBoard.get(r)[c]) {
        } else if (queensLeft === 0) {
          solutionObj[JSON.stringify(currentBoard)] = 1;
          queensLeft = n;
        } else {
          currentBoard.togglePiece(r,c);
          if (!currentBoard.hasAnyQueensConflicts()) {
            queensLeft--;
            queenFinder(queensLeft, currentBoard);
          } else {
            currentBoard.togglePiece(r,c);
          }
        }
      }
      
    }
  }
  
  let initializeBoard = function () {
    for (let r=0; r<n; r++) {
      for (let c=0; c<n; c++) {
        let startBoard = new Board({n: n});
        startBoard.togglePiece(r,c);
        queenFinder(n-1, startBoard);
      }
    }
  }

  initializeBoard();

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  
  return Object.keys(solutionObj).length;
};

console.log(findNQueensSolution(4));
console.log(countNQueensSolutions(6));