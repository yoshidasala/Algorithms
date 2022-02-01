/*



[(]) = false
[[()]] = true

input "string"
output  boolean

= iniialise a string with has only opening brackets
- iterate through the string
-if its a openining bracket than i want to add to the stack
-I will have a switch case that if the curr char is closing bracket than i want to check if it  isnty the other type  than pop the brackets
-switch case for each type of bracket
- if the stack is empty we can return true
- return false
*/

// [ ( ] )


  /*

  STACK:

  (
  [


  case: "]"
  let top = stack.pop()
  if (top === "[")
  break;
  }
)
  */

/*

str = [[()  ]]






*/

function balanced(str) {

  //create a opening variable which holds all the opening brackets
    let stack = []
    let openings = "[{("
    let closings = "]})"

    for (let i = 0; i < str.length; i++){
      if (openings.includes(str[i])) {
        stack.push(str[i])
        continue;
      } else if (closings.includes(str[i])) {
        // let opening = stack.pop()
        switch (str[i]) {
          case "}":
            if(stack.pop() !== "{") return false
              break;
          case ")":
            if(stack.pop() !== "(") return false
              break;
          case "]":
            if(stack.pop() !== "[")return false
              break;
        }
      }
    }
  return stack.length <=0 ? true:false
}


console.log(balanced("[[()]]"))
