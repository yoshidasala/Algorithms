let n = 9;

let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, arr) {
  if (arr.length < 1) return 0;

  let sockObj = {};
  let pairCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let sock = arr[i];

    sockObj[sock] === undefined ? (sockObj[sock] = 1) : (sockObj[sock] += 1);
  }


  for (let key in sockObj) {
    let value = sockObj[key];

    pairCount += Math.floor(value / 2);
  }

  return pairCount;
}

console.log(sockMerchant(n, arr))
