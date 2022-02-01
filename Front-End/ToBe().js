function myExpect(input_1) {
  let not = false;
  const obj = {
      get not() {
        not = !not;
        return this;
      },
      toBe(input_2) {
        if (not) {
          if (!Object.is(input_1, input_2)) {
            Return true;
          }
          Throw new Error(“FAILS”);
        }
        if (Object.is(input_1, input_2)) {
          Return true;
        }
        Throw new Error(“FAILS”);
      }
    }
    return obj;
  }

//NaN === NaN → false
//+0 === -0 → true
