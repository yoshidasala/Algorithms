const arr = [-1, 150, 190, 170, -1, -1, 160, 180];
function byHeight(arr) {
  let newArr = arr;

  newArr = newArr.filter((curr) => {
    if (curr !== -1) {
      return curr;
    }
  }).sort((a, b) => { return a - b })

  let indexVal = 0
  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== -1) {
      arr[i] = newArr[indexVal]
      indexVal++
    }
  }

  return arr ;
}

console.log(byHeight(arr));
