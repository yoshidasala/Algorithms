
// 1. it('inputs are same',() => expect(1).toBe(1))  //should console "Success: input are same"
// it('inputs are same',() => expect(1).toBe(2)) // should console "Failure: input are not the same"

function expect(input_1) {
  //set the not to false first
  let not = false;
  return  {
      get not(){
        not = !not;
        return this;
      },
      toBe (input_2){
        if (not) {
          if (!Object.is(input_1, input_2)) {
            return "Success: input are the same";
          }
          throw new Error("Failure: input not are the same");
        }
        if (Object.is(input_1,input_2)) {
          return "Success: input are the same";
        }
        throw new Error("Failure: input are not the same");
      }
    }

}

//NaN === NaN → false
// //+0 === -0 → true
// console.log(myExpect(NaN).toBe(NaN))
// console.log(myExpect(4).toBe(3))


console.log(expect(1).toBe(1))
console.log(expect(1).toBe(2))

// conosle.log(NaN === NaN)
// console.log(expect(NaN).toBe(NaN))
