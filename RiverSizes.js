/*



[1, 0, 0, 1, 0]
 |  |  |  |
[1, 0, 1, 0, 0]
 |  |  |  |
[0, 0, 1, 0, 1]
 |  |  |  |
[1, 0, 1, 0, 1]
 |  |  |  |
[1, 0, 1, 1, 0]

*/

//queue = push and pop
// [row, col]

//currRiverSize 1
//[-1,0] [1,0] [0,2] [1,1] [0,0],
/*

    0  1  2  3  4
   ---------------
 0 [1, 0, 0, 1, 0],
 1 [1, 0, 1, 0, 0],
 2 [0, 0, 1, 0, 1],
 3 [1, 0, 1, 0, 1],
 4 [1, 0, 1, 1, 0],

    0  1  2  3  4
   ---------------
 0 [T, T, F, F, F],
 1 [F, F, F, F, F],
 2 [F, F, F, F, F],
 3 [F, F, F, F, F],
 4 [F, F, F, F, F],

];
*/
let matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

/*
output : [1,2,2,2,5]

let row = 0
let col = 0
let vistedMatrix = [...matrix].fill(false)
let colLength = matrix[0].length
while(col<=colLength){

}


*/

function riverSizes(matrix) {
  let numRows = matrix.length; //5 rows
  let numCols = matrix[0].length; //5 columns
  let results = []


  //creatng visited matrix
  let length = numRows
  let copy = new Array(length);
  let queue = [[0, 0]];
  for (var i=0; i<length; ++i)
    copy[i] = matrix[i].slice(0).fill(false);


  while (queue.length !== 0) {

    // check if
    let [row, col] = queue.shift(); // 0, 0

    //check if it exists (valid row and col)
    if (row < numRows && row >= 0 && col < numCols && col >= 0) {
      // if not visited
      if (!copy[row][col]) {

        let currRiverSize = 0;
        if (matrix[row][col] === 1) {  //river
          currRiverSize += 1;
        } else if (matrix[row][col] === 0) {
          continue;
        }
        
        copy[row][col] = true //mark as visited
        //check neighbors
        queue.push([row-1, col])
        queue.push([row+1, col])
        queue.push([row, col-1])
        queue.push([row, col + 1])

        let neighbors = [[0,1], [0, -1], [1,0], [-1,0]];
        for (let [i,j] of neighbors) {
          let newRow =row + i;
          let newCol = col + j;
          if (newRow < numRows && newRow >= 0 && newCol < numCols && newCol >= 0) {
            if (!copy[newRow][newCol]){ // unvisited
              queue.push([newRow][newCol]);
            }
          }
        }
      }
    }
    }
    //[2, 0] //[3, 0] //[2,1]
  return results
}

console.log(riverSizes(matrix));
