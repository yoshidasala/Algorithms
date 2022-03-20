//you can make one or two jumps
// yo
let arr = [0, 0, 1, 0, 0, 1, 0]


function clouds(arr) {
  let jumps = 0;

  for (let i = 0; i < arr.length;){
//we can jump two
    if (arr[i + 2] === 0) {
      i = i + 2
      jumps++
    } else {
      i++
      jumps++
    }
    if (i === arr.length - 1) {
      return jumps
    }

  }

  return jumps;

}
console.log(clouds(arr))
