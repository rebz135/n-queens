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
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;

  
  // var solutionCount = undefined; //fixme

  // var success = [];

  // for (var r = 0; r < n; r++) {
  //   if (row does not have conflict) {
  //     for (var c = 0; c < n; c++) {
  //        if column does not have conflict
  //           then toggle
            
    
  //     //invoke recursive function
  //   } 
  // }
  // //rookFunc (rooksLeft = n, currentBoard = solution)
  //   //if ([r,c] is filled || there are col collisions || there are row collisions), then
  //     //return;
  //   //if (rooksLeft === 0),
  //     // var boardToPush = new Board(currentBoard.rows())
  //     // successfulBoards.push(boardToPush);
  //     //return
  //   //for all r, starting from r=0 until r=n
  //       //for all c, starting from c=0 until c=n
  //           //toggle at r,c
  //             //run rookFunc(rooksLeft-1, currentBoard)
  //           //toggle at r,c

  //   AFTER 1ST PLACEMENT
  //   rooksLeft = 2
  //   r = 0
  //   c = 0

  //   AFTER 2ND PLACEMENT
  //   rooksLeft = 
  //   r = 0
  //   c = 0

    

  // var rookFunc = function() {
    
  // }




  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
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
