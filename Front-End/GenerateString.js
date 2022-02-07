/*

implement a function :-
generate_string(undefined,null, false, 1, 2, 0 ,"foo", true, {bar:true}, {temp:false}, ['a','s',1,null]) ->
should return a string - "1 2 foo 1 bar a s 1"
=> only include string, number (except 0), key of object who's value is true or in short include everything whose .valueOf will return 1

*/


//"1 2 foo 1 bar a s 1"


// function generate(...args) {

//   let result = ""

//   for (const arg of args) {
//     if (typeof arg === 'string') {
//       result += arg + " ";
//     }
//     else if (typeof arg === 'number') {
//       result += toString(arg) + " ";
//     }
//     else if(typeof arg === 'object'){
//       for (let key in arg) {
//         if (Array.isArray(arg)) {

//                 args.concat(...arg);
//         } else if (arg.hasOwnProperty(key) && arg[key]) {
//           result += key + " ";
//         }
//       }
//     } else if (arg) {

//       result += "1 ";
//     }
//   }
//   return result;
// }





console.log(generate(undefined, null, false, 1, 2, 0 ,"foo", true, )



