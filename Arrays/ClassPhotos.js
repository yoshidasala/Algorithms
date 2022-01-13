/* first i will need to sort the two array
return a boolean
 */

const classPhoto = (blueArr, redArr) => {
  //sort both arrays

  blueArr.sort((a, b) => a - b);
  redArr.sort((a, b) => a - b);

  let red = redArr[0];
  let blue = blueArr[0];
  let backRow;
  let frontRow;

  if (red < blue) {
    frontRow = redArr;
    backRow = blueArr;
  } else {
    frontRow = blueArr;
    backRow = redArr;
  }
  for (let i = 0; i < backRow.length; i++) {
    if (backRow[i] < frontRow[i]) {
      return false;
    }
  }
  return true;
};

let blueHeights = [5, 8, 1, 3, 4]; //13458
let redHeights = [6, 9, 2, 4, 5]; //24569

console.log(classPhoto(redHeights, blueHeights));
