// First Non - Repeating Character:

// input: string
// output:index of first non-repeating character

let string = "abcdcaf";
let string2 = "bbxbxf";

function firstNonRepeating(str) {
  let counts = {};

  //getting the counts of each character in str
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    counts[letter] = (counts[letter] || 0) + 1;
  }

  for(let i = 0; i < str.length; i++) {
    if(counts[str[i]] === 1) {
      return i
    }
  }
}

console.log(firstNonRepeating(string));
console.log(firstNonRepeating(string2));





// // First Non - Repeating Character:

// // input: string
// // output:index of first non-repeating character

// let string = "abcdcaf"
// let string2 = "bbxbxf"

// function firstNonRepeating(str) {

//   let counts = {};
//   let firstPosition = {};
//   let firstNonrepeatingIndex = Infinity;

//   //getting the counts of each character in str
//   for(let i =0; i < str.length; i++){

//     let letter = str[i];
//     counts[letter] =(counts[letter] || 0) + 1;
//     firstPosition[letter] = firstPosition[letter] || i;
//   }

//   for(let letter of str) {
//     if (counts[letter] === 1) {
//       return letter;
//     }
//   }

//   Object.keys(counts).forEach(letter => {
//     if(counts[letter] === 1) {
//       firstNonrepeatingIndex = Math.min(firstNonrepeatingIndex, firstPosition[letter]);
//     }
//   })

// if(firstNonrepeatingIndex === Infinity) return -1;

// return firstNonrepeatingIndex;
// }

// console.log(firstNonRepeating(string));
// console.log(firstNonRepeating(string2));
