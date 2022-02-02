function expect(input_1) {
  //set the not to false first
  let not = false;
  return  {
      get: not() {
        not = !not;
        return this;
      }
      toBe:(input_2) {
        if (not) {
          if (!Object.is(input_1, input_2)) {
            return true;
          }
          throw new Error("error");
        }
        if (Object.is(input_1, input_2)) {
          return true;
        }
        throw new Error("error");
      }
    }

  }

//NaN === NaN → false
// //+0 === -0 → true
// console.log(myExpect(3).toBe(3))
// console.log(myExpect(4).toBe(3))


// console.log(expect(3).not.toBe(3))
// console.log(expect(4).not.toBe(3))


console.log(expect(3).toBe(3))
